import os
import json
import climber_message as md
from threading import RLock
from survey3d import SurveyManager
from rtma_thread import RTMAThread
from climber_core_utilities.load_config import system
from climber_core_utilities.test_log import session_string_from_unix_time

class SurveyManagerClimber(SurveyManager):
    lock: RLock
    rtmaThread: RTMAThread

    def __init__(self, _configPath: str):
        self.survey = None

        try:
            with open(os.path.join(_configPath, "participant_config.json"), 
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
        
        self.dataPath = ""
        
        self.lock = RLock()

        self.rtmaThread = RTMAThread(self)

    def updateSetNum(self, setNum: int):
        with self.lock:
            if self.survey:
                self.survey.setNum = setNum

    def newSurvey(self, participant: str):
        with self.lock:
            return super().newSurvey(participant)
        
    def sendSurveyRTMA(self):
        with self.lock:
            if self.survey:
                print("Queuing survey RTMA messages...")
                self.rtmaThread.queueMessages(self.survey.toRTMAMessages())
                self.rtmaThread.sendMessageQueue()

    def restim(self):
        self.rtmaThread.queueMessage(md.MDF_SENSORY_TRIAL_DISCARD())
        self.rtmaThread.sendMessageQueue()

    def updateSurvey(self, survey: dict) -> bool:
        with self.lock:
            return super().updateSurvey(survey)
        
    def updateDataPath(self, msgData: md.MDF_SET_START):
        self.dataPath = os.path.join(
            str(system("data_path")), 
            msgData.session_type,
            f"{msgData.subject_id}",
            f"{msgData.subject_id}.data."
            f"{session_string_from_unix_time(msgData.session_num)}"
        )

    def saveSurvey(self):
        with self.lock:
            return super().saveSurvey()
        
    def startRTMAThread(self):
        """Start the rtma thread"""
        self.rtmaThread.start()
        
    def stopRTMAThread(self):
        """Stop the rtma thread"""
        self.rtmaThread.stop()

    def joinRTMAThread(self):
        """Wait for rtma thread to join"""
        self.rtmaThread.join()

    def shutdownRTMAThreadAndWait(self):
        """Shutdown the rtma thread and wait for it to join"""
        self.stopRTMAThread()
        self.joinRTMAThread()

    