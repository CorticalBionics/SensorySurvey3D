import os
import json
from backend.survey3d import Survey

class SurveyManager():
    """
    An object which handles survey creation, deletion, and editing. Has 
    knowledge of paths which the survey object itself does not need access to
    """
    survey: Survey | None = None
    config: dict = {}
    data_path: str = ""

    def __init__(self, _config_path: str, _data_path: str):
        """
        Class initialization function

        Args:
            _config_path: The path in which the participant_config.json file 
            lives
            _data_path: The path in which surveys should be saved
        """
        try:
            with open(os.path.join(_config_path, "participant_config.json"), 
                    'r') as data:
                self.config = json.load(data)
        except json.JSONDecodeError as e:
            raise json.JSONDecodeError(
                f"Participant config cannot be parsed",
                e.doc,
                e.pos
            )
        except Exception as e:
            raise Exception(f"Participant config cannot be read: {e}")
        
        self.data_path = os.path.join(_data_path)

    def newSurvey(self, participant: str):
        """
        Create a new survey for a given participant if one does not already
        exist

        Args:
            participant: The participant for which the survey is created, must 
            be present in the participant config
        
        Returns: True if success, False if failure
        """
        if self.survey:
            print("Cannot begin new survey; there is already an ongoing "
                  "survey.")
            return False
        else:
            if participant in self.config:
                self.survey = Survey(participant, self.config[participant])
                self.survey.startDateTimeNow()
                return True
            else:
                print("Cannot begin new survey; given participant is not in " 
                      "participant config.")
    
    def saveSurvey(self):
        """
        Set the end time to the current time, then saves the survey to a file 
        in the Manager's data path

        Returns: True if success, False if failure
        """
        if isinstance(self.survey, Survey):
            self.survey.endTimeNow()
            try:
                if self.survey.saveSurvey(self.data_path):
                    self.survey = None
                    return True
                else:
                    return False
            except Exception as e:
                print(e)
                return False
        else:
            return False