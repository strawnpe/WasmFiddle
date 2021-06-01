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
### Node Modules
1. From root directory, install client dependencies and create build

   ```npm run build```
2. Install dependencies for the server

   ```npm install```
### Emscripten SDK
The emscripten sdk (emsdk) is a library that compiles
Clang and Rust to JavaScript using WebAssembly.
1. Confirm you are at root directory of project
2. Run the setup script

   ```./setup.sh```
## Running Project
1. Confirm you are at root directory of project
2. Start the server

   ```npm start```
3. Navigate to site in browser

   ```http://localhost:3001```

# API
After starting the server per the above instructions, each endpoint can be run 
by navigating to `http://localhost:3001` + the route.
## GET *
`http://localhost:3001/`

Default route that returns the React app
## GET /api
`http://localhost:3001/api`

A test endpoint that returns a string
## GET /files
`http://localhost:3001/files`

Lists all files within the `uploads` directory and their paths
## GET /files/:name
`http://localhost:3001/files/cat.png`

An endpoint that downloads the specified file from the uploads folder
## POST /send-file
`http://localhost:3001/send-file`

An endpoint that uploads a file into the uploads folder by accepting a string
as input and converting the text to a file

# Resources
- [Semantic UI](https://semantic-ui.com/)
- [React Feather](https://github.com/feathericons/react-feather)
- [Gitignore Template](https://www.toptal.com/developers/gitignore/api/webstorm,react)
- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html)