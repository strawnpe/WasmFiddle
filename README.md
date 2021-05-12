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

   ```cd WasmFiddle```
## Installing Dependencies
### Emscripten SDK
The emscripten sdk (emsdk) is a library that compiles
Clang and Rust to JavaScript using WebAssembly.
1. Confirm you are at root directory of project
2. Change into ```lib``` directory

   ```cd lib```
3. Clone the emsdk project

   ```git clone https://github.com/emscripten-core/emsdk.git```
4. Change into the new directory

   ```cd emsdk```
5. Fetch the latest version of the SDK

   ```git pull```
6. Download and install the latest

   ```./emsdk install latest```
7. Make the latest installation active

   ```./emsdk activate latest```
8. Activate environment variables

   ```source ./emsdk_env.sh```
### Node Modules
1. Install dependencies for server

   ```cd server```

   ```npm install```
2. Install dependencies for client

   ```cd ../client```

   ```npm install```
## Running Project
1. Confirm you are at root directory of project
2. Start server at port 3001
   ```cd ../server```
   ```npm start```
3. Start client at port 3000

   ```cd ../client```

   ```npm start```
4. Navigate to site in browser

   ```localhost:3000```

# Resources
- [Semantic UI](https://semantic-ui.com/)
- [React Feather](https://github.com/feathericons/react-feather)
- [Gitignore Template](https://www.toptal.com/developers/gitignore/api/webstorm,react)
- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html)