# External API Simulator

This is a simple web api server made with fastify.
It currently supports only one API at a time. 
It can be easily expanded, just clone the `route.js` folder set different ENV variables for the `API_URL` and `FILE_PATH` and you can have 2 or more API at the same time

## Setup

If you have nvm installed run `nvm use`, otherwise the project is using the `lts/jod` node version. Once node version is set then run `npm i` to download the node_modules

## Usage

1. Create the json response you want the server to return and put it in `/responses/<your-custom-response-file>.json`
    - I advise to create always different files and to not overwrite the same
2. Create a `.env` file at the root of the project if you do not have it
3. Create 2 variables in the `.env` file:
    - `PORT`: port where the server will serve the api
    - `API_URL`: the uri of the API, ex: `/test-api`. You will call the api to `http://localhost:{PORT}/{API_URL}
    - `FILE_PATH`: path of the file where the json response is written. 