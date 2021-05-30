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
    if (language === 'text/x-csrc' || language === 'text/x-c++src') {
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

function generateUniqueFileName(language) {
    let currentTime = Date.now().toString();
    let uniqueFileName = currentTime;
    if (language === 'text/x-csrc') {
        uniqueFileName += '.c';
    } else if (language === 'text/x-c++src') {
        uniqueFileName += '.cpp';
    } else if (language === 'rust') {
        uniqueFileName += '.rs';
    }
    return uniqueFileName;
}

function isValidLanguage(language) {
    let validLanguages = ['text/x-csrc', 'text/x-c++src', 'rust'];
    if (validLanguages.includes(language)) {
        return true;
    } else {
        return false;
    }
}

module.exports = { listFiles, compileToWasm, generateUniqueFileName, isValidLanguage };