// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 4000;
//
// const PACKAGE_HEADER_LENGTH = 8,
//     PACKAGE_BODY_LENGTH = 4,
//     PACKAGE_SEQ_LENGTH = 4;
//
// const lessonIds = [
//         "136797",
//         "136798",
//         "136799",
//         "136800",
//         "136801",
//         "136803",
//         "136804",
//         "136806",
//         "136807",
//         "136808",
//         "136809",
//         "141994",
//         "143517",
//         "143557",
//         "143564",
//         "143644",
//         "146470",
//         "146569",
//         "146582"
//     ],
//     lessonIds_length = lessonIds.length;
//
// let index = 0,
//     seq = 0,
//     id = "0";
//
// const socket = new net.Socket();
//
// socket.connect({
//     host: HOST,
//     port: PORT,
//     keepAlive: true,
// });
//
// setInterval(() => {
//     index = Math.floor(Math.random() * lessonIds_length);
//     id = lessonIds[index];
//     socket.write(encode(id));
// }, 10);
// // for (let i = 0; i < 100; i++) {
// //     index = Math.floor(Math.random() * lessonIds_length);
// //     id = lessonIds[index];
// //     socket.write(encode(id));
// // }
//
// socket.on('data', buffer => {
//     const {seq, result} = decode(buffer);
//     console.log(`包头 ${seq} 所对应的课程名称为 ${result}!`);
// });
//
// function encode(id) {
//     const header = Buffer.alloc(PACKAGE_HEADER_LENGTH);
//     header.writeInt32BE(++seq);
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     header.writeInt32BE(body.length, PACKAGE_SEQ_LENGTH);
//     console.log(`包头 ${seq} 所对应的课程 ID 为 ${id}!`);
//     return Buffer.concat([header, body]);
// }
//
// function decode(buffer) {
//     const seq = buffer.readInt32BE();
//     const body = buffer.slice(PACKAGE_HEADER_LENGTH);
//     const result = body.toString();
//     return {
//         seq,
//         result
//     };
// }

console.log('nodejs rpc 全双工简易版通信部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
