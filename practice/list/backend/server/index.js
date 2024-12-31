const path = require('path');
const fs = require('fs');
const protoBuf = require('protocol-buffers');

const rpc = require('./lib');
const columns = require('./data');

const PORT = 4000;

const sortConfig = {
    0: (a, b) => b.id - a.id,
    1: (a, b) => b.id - a.id,
    2: (a, b) => b.sub_count - a.sub_count,
    3: (a, b) => b.column_price - a.column_price
};

const PROTO_DIR = path.resolve(__dirname, '../proto/columns.proto');

const schema = protoBuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const tcpServer = rpc({requestSchema: schema.ColumnRequest, responseSchema: schema.ColumnResponse});

const server = tcpServer.createServer(({body}, response) => {
    const {sort, filter} = body;

    console.log(`sort(排序): ${sort}, filter(筛选): ${filter}`);

    response.end({
        columns: columns.sort(sortConfig[sort]).filter(column => filter ? column.type === filter : column)
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
