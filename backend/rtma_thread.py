import os
import pyrtma
import climber_message as md
from pathlib import Path
from climber_core_utilities.climber_app import ClientConfig, ClimberThread

from backend.survey3d import SurveyManager
from logging import INFO

class RTMAThread(ClimberThread):
    ongoing_trial: bool

    def __init__(
        self,
        survey_manager: SurveyManager,
        server: str | None = None,
        logging_level: int = INFO,
    ):
        client_config = ClientConfig(
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

        self.survey_manager = survey_manager
        self.ongoing_trial = False

        super().__init__(
            [client_config],
            self.process_message,
            "SensorySurvey3D Backend",
            server,
            logging_level
        )

    def process_message(self, msg: pyrtma.Message):
        match msg.data:
            case md.MDF_SET_START():
                if "Survey" in msg.data.paradigm:
                    if (
                        self.survey_manager.survey 
                        and self.survey_manager.survey.projectedFields
                    ):
                        print(
                            "There is already a current survey! Cannot start "
                            + "new survey until current survey is complete."
                        )
                    else:
                        if (
                            self.survey_manager.survey 
                            and not self.survey_manager.survey.projectedFields
                        ):
                            print(
                                f"Survey is empty; updating survey set "
                                f"number to {msg.data.set_num}"
                            )
                            self.survey_manager.survey.setNum = msg.data.set_num
                        elif self.survey_manager.newSurvey(msg.data.subject_id):
                            if self.survey_manager.survey:
                                print(
                                    f"Starting survey for "
                                    f"{msg.data.subject_id}, set number "
                                    f"{msg.data.set_num}."
                                )
                                self.survey_manager.survey.setNum = (
                                    msg.data.set_num
                                )
                        else:
                            print(
                                f"Cannot start survey for "
                                f"{msg.data.subject_id}!"
                            )
            case md.MDF_SAVE_MESSAGE_LOG():
                self.survey_manager.data_path = os.path.join(
                        Path(msg.data.pathname).parent
                    )
            case md.MDF_TRIAL_METADATA():
                self.ongoing_trial = True
            case md.MDF_ENABLE_PARTICIPANT_RESPONSES():
                self.ongoing_trial = False
            case _:
                self.logger.warning("Received unrecognized message")

