import pyrtma
from climber_core_utilities.climber_app import ClientConfig, ClimberThread
import climber_message as md

from backend.survey3d import SurveyManager
from logging import INFO

class RTMAThread(ClimberThread):
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

        super().__init__(
            client_configs=[client_config],
            message_handler_function = self.process_message,

        )

    def process_message(self, msg: pyrtma.Message):
        match msg.data:
            case _:
                self.logger.warning("Received unrecognized message")

