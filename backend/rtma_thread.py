import os
import pyrtma
import climber_message as md
from pathlib import Path
from climber_core_utilities.climber_app import ClientConfig, ClimberThread

from survey_manager_climber import SurveyManagerClimber
from logging import INFO

class RTMAThread(ClimberThread):
    ongoingTrial: bool

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
                md.MT_ENABLE_PARTICIPANT_RESPONSES,
                md.MT_SAVE_MESSAGE_LOG
            ],
            primary = True
        )

        self.surveyManager = surveyManager
        self.ongoingTrial = False

        super().__init__(
            [clientConfig],
            self.process_message,
            "SensorySurvey3D Backend",
            server,
            loggingLevel
        )

    def process_message(self, msg: pyrtma.Message):
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
                        else:
                            print(
                                f"Cannot start survey for "
                                f"{msg.data.subject_id}!"
                            )
            case md.MDF_SAVE_MESSAGE_LOG():
                self.surveyManager.data_path = os.path.join(
                        Path(msg.data.pathname).parent
                    )
            case md.MDF_TRIAL_METADATA():
                self.ongoingTrial = True
            case md.MDF_ENABLE_PARTICIPANT_RESPONSES():
                self.ongoingTrial = False
            case _:
                self.logger.warning("Received unrecognized message")

