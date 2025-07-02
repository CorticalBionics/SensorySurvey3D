import os
import rich
import climber_core_utilities.load_config as load_config

ip = load_config.system()["ipExec"]

rich.print(f"\tStarting survey3d server at http://{ip}:5002")

cmd = f"uvicorn main:app --host {ip} --port 5002  --log-level warning"
os.system(cmd)