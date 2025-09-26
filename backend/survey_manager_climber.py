import os
import json
import climber_message as md
from threading import RLock
from survey3d import SurveyManager
from rtma_thread import RTMAThread
import climber_core_utilities as ccu
from climber_core_utilities.test_log import session_string_from_unix_time

class SurveyManagerClimber(SurveyManager):
    lock: RLock
    rtmaThread: RTMAThread

    def __init__(self, _configPath: str):
        self.survey = None

        self.config = {}
        climber_participant_config = ccu.load_config.participant()
        for p in climber_participant_config:
            if "survey3d" in climber_participant_config[p]:
                self.config[p] = climber_participant_config[p]["survey3d"]
        
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
            str(ccu.load_config.system("data_path")), 
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

    