const path = require('path');
const fs = require('fs');
const protoBuf = require('protocol-buffers');

const rpc = require('./lib');
const columns = require('./data/column');

const PORT = 4000;

const PROTO_DIR = path.resolve(__dirname, '../proto/column.proto');

const schema = protoBuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcpServer = rpc(schema.ColumnRequest, schema.ColumnResponse);

const server = tcpServer.createServer((request, response) => {
    const {body} = request;
    const {column_id} = body;

    console.log(`课程详情 ID 为 ${column_id}`);

    //...

    response.end({
        column: columns[0],
        recommend_columns: [columns[2], columns[3]],
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
