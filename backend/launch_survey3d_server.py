import os
import climber_core_utilities.load_config as load_config

cmd = "uvicorn main:app --host " + str(load_config.system()["ipExec"]) + " --port 5002  --log-level warning"
os.system(cmd)