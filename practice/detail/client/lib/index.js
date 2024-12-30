const path = require('path');
const fs = require('fs');
const protoBuf = require('protocol-buffers');
const EasySocket = require('easy_sock');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

const IP = '127.0.0.1',
    PORT = 4000,
    TIMEOUT = 666;

const PROTO_DIR = path.resolve(__dirname, '../../proto/column.proto');

const schema = protoBuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');

const socket = new EasySocket({
    ip: IP,
    port: PORT,
    timeout: TIMEOUT,
    keepAlive: true
});

socket.encode = (data, seq) => {
    const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
    header.writeInt32BE(seq);
    const body = schema.ColumnRequest.encode(data);
    const body_length = body.length;
    header.writeInt32BE(body_length, PACKAGE_SEQ_LENGTH);
    return Buffer.concat([header, body]);
};

socket.decode = (buffer) => {
    const seq = buffer.readInt32BE();
    const body = buffer.slice(PACKAGE_HEADER_LENGTH);
    const result = schema.ColumnResponse.decode(body);
    return {
        result,
        seq
    };
};

socket.isReceiveComplete = (buffer) => {
    if (buffer.length <= PACKAGE_HEADER_LENGTH)
        return 0;
    const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
    return body_length + PACKAGE_HEADER_LENGTH;
};

module.exports = socket;
