// reference: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const commands = require('./compileToWasm');
const cors = require('cors');
const bodyParser = require('body-parser');

const corsOptions = {
    origin: 'http://localhost:3000',
}

global.__basedir = __dirname;

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(fileUpload({
    createParentPath: true
}));

const jsonParser = bodyParser.json()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// just a test
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// testing that we can access command line through node
app.get("/list", (req, res) => {
    commands.listFiles();
    res.json({ message: "Listing files (see command line)" });
});

// list files in /uploads directory
app.get("/files", (req, res) => {
    const directoryPath = "./server/uploads/";

    fs.readdir(directoryPath, (err, files) => {
        if (err)
            res.status(500).send(err);
        else {
            let fileList = [];
            files.forEach(file => {
                fileList.push({
                    name: file,
                    url: directoryPath + file,
                });
            })

            res.status(200).send(fileList);
        }
    })
});

// test endpoint that runs command via emsdk
app.get("/emsdk", (req, res) => {
    commands.compileToWasm('hello');
    res.json({ message: "Compiling files (see command line)" });
});

// // upload a file to the /uploads directory
// app.post('/convert-file',  (req, res) => {
//     try {
//         if(!req.files) {
//             res.send({
//                 status: false,
//                 message: 'No file uploaded'
//             });
//         } else {
//             let file = req.files.file;
//
//             // generate unique name using datetime
//             let uniqueFileName = commands.generateUniqueFileName(file.name);
//
//             let language = commands.getLanguageType(file.name);
//
//             if (!language) {
//                 res.send({
//                     status: false,
//                     message: 'Invalid file extension'
//                 });
//             } else {
//                 file.mv('./uploads/' + uniqueFileName);
//
//                 commands.compileToWasm(uniqueFileName, language);
//
//                 let period = uniqueFileName.lastIndexOf('.');
//                 let shortFileName = uniqueFileName.substring(0, period);
//
//                 res.send({
//                     status: true,
//                     message: 'File successfully uploaded',
//                     data: {
//                         fullName: uniqueFileName,
//                         shortName: shortFileName,
//                         type: file.mimetype,
//                         size: file.size
//                     }
//                 });
//             }
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// upload a file to the /uploads directory
app.post('/send-file', cors(corsOptions), jsonParser, (req, res) => {
    try {
        if(!req.body) {
            res.send({
                status: false,
                message: 'No text uploaded'
            });
        } else {
            let sourceLanguage = req.body.language;
            let sourceText = req.body.text;

            if (!commands.isValidLanguage(sourceLanguage)) {
                res.send({
                    status: false,
                    message: 'Invalid language type'
                });
            } else {

                let uniqueFileName = commands.generateUniqueFileName(sourceLanguage);

                fs.writeFile('./server/uploads/' + uniqueFileName, sourceText, function (err) {
                    if (err) return console.log(err);
                    console.log(sourceText + '\nWritten to\n' + uniqueFileName);
                });

                commands.compileToWasm(uniqueFileName, sourceLanguage);

                let period = uniqueFileName.lastIndexOf('.');
                let shortFileName = uniqueFileName.substring(0, period);

                res.send({
                    status: true,
                    message: 'File successfully saved',
                    data: {
                        fullName: uniqueFileName,
                        shortName: shortFileName
                    }
                });
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// download specific file by name from /uploads directory
app.get("/files/:name", (req, res) => {
    const fileName = req.params.name;
    const directoryPath = "./server/uploads/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Error downloading file. " + err,
            });
        }
    });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});