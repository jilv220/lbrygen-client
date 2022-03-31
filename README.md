# lbrygen-client

Run `git clone https://github.com/jilv220/lbrygen-client.git` or download zip to local

## Requirement
You need to have `lbrynet` installed.
Run `sudo npm install` to install all dependencies for the vue frontend.
Run `pip install -r requirements.txt` to install all dependencies for the python api.

## Deploy
1. Run `lbrynet start` first. 
2. Run `python api.py`
3. Run `npm run serve` to develop
4. Run `npm run build` to build and run `serve -s dist/ ` to serve