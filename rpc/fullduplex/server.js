const net = require('net');

const PACKAGE_HEADER_LENGTH = 8,
    PACKAGE_SEQ_LENGTH = 4;

const PORT = 4000;

const lesson = {
    136797: "01 | 课程介绍",
    136798: "02 | 内容综述",
    136799: "03 | Node.js是什么？",
    136800: "04 | Node.js可以用来做什么？",
    136801: "05 | 课程实战项目介绍",
    136803: "06 | 什么是技术预研？",
    136804: "07 | Node.js开发环境安装",
    136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
    136807: "09 | 模块：CommonJS规范",
    136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
    136809: "11 | 模块：npm",
    141994: "12 | 模块：Node.js内置模块",
    143517: "13 | 异步：非阻塞I/O",
    143557: "14 | 异步：异步编程之callback",
    143564: "15 | 异步：事件循环",
    143644: "16 | 异步：异步编程之Promise",
    146470: "17 | 异步：异步编程之async/await",
    146569: "18 | HTTP：什么是HTTP服务器？",
    146582: "19 | HTTP：简单实现一个HTTP服务器"
}

const server = net.createServer(socket => {
    let buffer = null,
        packageLength = 0,
        packageBuffer = null;
    socket.on('data', data => {
        buffer = buffer && buffer.length ? Buffer.concat([buffer, data]) : data;
        while (buffer && (packageLength = isReceiveComplete(buffer))) {
            if (packageLength === buffer.length) {
                packageBuffer = buffer;
                buffer = null;
            } else {
                packageBuffer = buffer.slice(0, packageLength);
                buffer = buffer.slice(packageLength);
            }
            const {result: id, seq} = decode(packageBuffer);
            socket.write(encode(lesson[id], seq));
        }
    });
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});

function encode(lesson, seq) {
    const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
    header.writeInt32BE(seq);
    const body = Buffer.from(lesson);
    header.writeInt32BE(body.length, PACKAGE_SEQ_LENGTH);
    return Buffer.concat([header, body]);
}

function decode(buffer) {
    const seq = buffer.readInt32BE();
    const body = buffer.slice(PACKAGE_HEADER_LENGTH);
    const result = body.readInt32BE();
    return {
        result,
        seq
    };
}

function isReceiveComplete(buffer) {
    if (buffer.length <= PACKAGE_HEADER_LENGTH)
        return 0;
    const body_length = buffer.readInt32BE(PACKAGE_SEQ_LENGTH);
    return PACKAGE_HEADER_LENGTH + body_length;
}
