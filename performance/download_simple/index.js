const http = require('http');
const fs = require('fs');
const path = require('path');

const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
const STATIC_DIR = path.resolve(__dirname, './source/static');

const PORT = 4000;

const server = http.createServer((req, res) => {

});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});



