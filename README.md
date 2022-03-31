# lbrygen-client

Clone the repo with `git clone https://github.com/jilv220/lbrygen-client.git` <br>

## Requirement

Install `lbrynet`
```
chmod +x lbrynet_install.sh
./lbrynet_install.sh
``` 
Install dependencies for the vue frontend
```
sudo npm install
```
Install dependencies for the python api.
```
pip install -r requirements.txt
```

## Deployment
1. Run `./lbrynet start` first. 
2. Run `python api.py`
3. Run `npm run serve` to start the development server
4. Run `npm run build` to build and run `serve -s dist/ ` to serve
