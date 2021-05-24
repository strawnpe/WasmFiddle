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

function generateUniqueFileName(fileName) {
    let currentTime = Date.now().toString();
    let uniqueFileName = currentTime + '-' + fileName;
    return uniqueFileName;
}

function getLanguageType(fileName) {
    let language = null;
    let period = fileName.lastIndexOf('.');
    let fileExtension = fileName.substring(period + 1).toLowerCase();

    if (fileExtension === 'c') {
        language = 'c';
    } else if (fileExtension === 'cpp') {
        language = 'c++';
    } else if (fileExtension === 'rs') {
        language = 'rust';
    }
    return language;
}

module.exports = { listFiles, compileToWasm, generateUniqueFileName, getLanguageType };