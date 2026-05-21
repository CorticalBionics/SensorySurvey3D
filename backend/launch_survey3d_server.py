import subprocess
import rich
import climber_core_utilities.load_config as load_config

ip = load_config.host()["ip"]

rich.print(f"\tStarting survey3d server at http://{ip}:5003")

cmd = f"uvicorn main:app --host {ip} --port 5003 --log-level warning"
subprocess.run(cmd)