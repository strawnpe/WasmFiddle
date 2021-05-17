const { exec } = require("child_process");

function listFiles() {
    exec('ls -la', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
    });
}

// test method to compile clang to wasm
// reference: https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm
function compileToWasm(filename, language) {
    let buildFilePath = `uploads/${filename}`
    let buildCommand = '';
    if (language === 'c' || language === 'c++') {
        buildCommand = `emcc ${buildFilePath}.c -s WASM=1 -o ${buildFilePath}.html`;
    }
    else {
        buildCommand = '';
    }
    exec(buildCommand, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
    });
}

module.exports = { listFiles, compileToWasm };