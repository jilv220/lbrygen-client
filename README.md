# lbrygen-client

Clone the repo with `git clone https://github.com/jilv220/lbrygen-client.git` <br>

## Requirement
`chmod +x lbrynet_install.sh` 
Then `./lbrynet_install.sh` to install `lbrynet`. <br>

`sudo npm install` to install all dependencies for the vue frontend. <br>
`pip install -r requirements.txt` to install all dependencies for the python api.

## Deployment
1. Run `./lbrynet start` first. 
2. Run `python api.py`
3. Run `npm run serve` to start the development server
4. Run `npm run build` to build and run `serve -s dist/ ` to serve
