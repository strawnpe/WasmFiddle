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
    let buildCommand = '';
    let period = filename.lastIndexOf('.');
    let shortFileName = filename.substring(0, period);
    if (language === 'c' || language === 'c++') {
        buildCommand = `emcc uploads/${filename} -s WASM=1 -o uploads/${shortFileName}.html`;
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