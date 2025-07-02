from __future__ import annotations
import os
import pyrtma
import climber_message as md
from pathlib import Path
from typing import TYPE_CHECKING
from climber_core_utilities.climber_app import ClientConfig, ClimberThread

from logging import INFO

if TYPE_CHECKING:
    from survey_manager_climber import SurveyManagerClimber

class RTMAThread(ClimberThread):
    ongoingTrial: bool
    _messageQueue: list[pyrtma.MessageData]

    def __init__(
        self,
        surveyManager: SurveyManagerClimber,
        server: str | None = None,
        loggingLevel: int = INFO,
    ):
        clientConfig = ClientConfig(
            module_id = 0,
            module_name = "SensorySurvey3D",
            message_list = [
                md.MT_EXIT, 
                md.MT_SET_START,
                md.MT_TRIAL_METADATA,
                md.MT_ENABLE_PARTICIPANT_RESPONSES
            ],
            primary = True
        )

        self.surveyManager = surveyManager
        self.ongoingTrial = False
        self._messageQueue = []

        super().__init__(
            clientConfig,
            self.processMessage,
            server,
            "SensorySurvey3D Backend",
            loggingLevel
        )

    def queueMessage(self, msgData: pyrtma.MessageData):
        self._messageQueue.append(msgData)

    def queueMessages(self, msgsData: list[pyrtma.MessageData]):
        self._messageQueue += msgsData

    def sendMessageQueue(self):
        if len(self._messageQueue):
            for omsg in self._messageQueue:
                self.client.send_message(omsg)
            self._messageQueue = []

    def processMessage(self, msg: pyrtma.Message):
        match msg.data:
            case md.MDF_SET_START():
                if "Survey" in msg.data.paradigm:
                    if (
                        self.surveyManager.survey 
                        and self.surveyManager.survey.projectedFields
                    ):
                        print(
                            "There is already a current survey! Cannot start "
                            + "new survey until current survey is complete."
                        )
                    else:
                        if (
                            self.surveyManager.survey 
                            and not self.surveyManager.survey.projectedFields
                        ):
                            print(
                                f"Survey is empty; updating survey set "
                                f"number to {msg.data.set_num}"
                            )
                            self.surveyManager.updateSetNum(
                                msg.data.set_num
                            )
                            self.surveyManager.updateDataPath(msg.data)
                        elif self.surveyManager.newSurvey(msg.data.subject_id):
                            if self.surveyManager.survey:
                                print(
                                    f"Starting survey for "
                                    f"{msg.data.subject_id}, set number "
                                    f"{msg.data.set_num}."
                                )
                                self.surveyManager.updateSetNum(
                                    msg.data.set_num
                                )
                                self.surveyManager.updateDataPath(msg.data)
                        else:
                            print(
                                f"Cannot start survey for {msg.data.subject_id}!"
                            )
            case md.MDF_TRIAL_METADATA():
                self.ongoingTrial = True
            case md.MDF_ENABLE_PARTICIPANT_RESPONSES():
                self.ongoingTrial = False
            case _:
                self.logger.warning(f"Received unrecognized message: {type(msg.data)}")

        # Send queued messages
        self.sendMessageQueue()
