// reference: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
const path = require('path');
const express = require('express');
const commands = require('./compileToWasm');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// testing that we can access command line through node
app.get("/list", (req, res) => {
    commands.listFiles();
    res.json({ message: "Listing files (see command line)" });
});

// test endpoint that runs command via emsdk
app.get("/emsdk", (req, res) => {
    commands.compileToWasm('hello');
    res.json({ message: "Compiling files (see command line)" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});