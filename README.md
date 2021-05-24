# WasmFiddle
WasmFiddle is a code playground that allows a user to input
code in C/C++/Rust, build the code using WebAssembly, and
display the output in the browser.

# Prerequisites
- Node (this project uses v15.14.00)

# Project Setup
## Cloning Repository
1. Clone repository

   ```git clone https://github.com/strawnpe/WasmFiddle.git```
2. Change into project directory

   ```cd WasmFiddle/```
## Installing Dependencies
### Emscripten SDK
The emscripten sdk (emsdk) is a library that compiles
Clang and Rust to JavaScript using WebAssembly.
1. Confirm you are at root directory of project
2. Change into ```lib``` directory

   ```cd lib/```
3. Clone the emsdk project

   ```git clone https://github.com/emscripten-core/emsdk.git```
4. Change into the new directory

   ```cd emsdk/```
5. Fetch the latest version of the SDK

   ```git pull```
6. Download and install the latest

   ```./emsdk install latest```
7. Make the latest installation active

   ```./emsdk activate latest```
8. Activate environment variables

   ```source ./emsdk_env.sh```
### Node Modules
1. From root directory, install dependencies for server

   ```npm install```
2. Install dependencies for client

   ```cd client/```

   ```npm install```
## Running Project
1. Confirm you are at root directory of project
2. Start server at port 3001

   ```npm start```
3. Start client at port 3000

   ```cd client/```

   ```npm start```
4. Navigate to site in browser

   ```http://localhost:3000```

# API
After starting the server per the above instructions, each endpoint can be run 
by navigating to `http://localhost:3001` + the route.
## GET *
`http://localhost:3001/`

Default route that returns the React app
## GET /api
`http://localhost:3001/api`

A test endpoint that returns a string
## GET /list
*To be deleted later*

`http://localhost:3001/list`

A test endpoint to list files in the server file system
## GET /files
`http://localhost:3001/files`

Lists all files within the `uploads` directory and their paths
## GET /emsdk
*To be deleted later*

`http://localhost:3001/emsdk`

A test endpoint to call the emsdk on the server
## GET /files/:name
`http://localhost:3001/files/cat.png`

An endpoint that downloads the specified file from the uploads folder
## POST /upload-file
`http://localhost:3001/upload-file`

An endpoint that uploads a file into the uploads folder

Request body type: `form-data`

Request body key: `file`

Request body value: `cat.png`

# Resources
- [Semantic UI](https://semantic-ui.com/)
- [React Feather](https://github.com/feathericons/react-feather)
- [Gitignore Template](https://www.toptal.com/developers/gitignore/api/webstorm,react)
- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html)