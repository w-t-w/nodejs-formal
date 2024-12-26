// const net = require('net');
//
// const HOST = '127.0.0.1',
//     PORT = 4000;
//
// const PACKAGE_BODY_LENGTH = 4;
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
// let index = Math.floor(Math.random() * lessonIds_length),
//     id = lessonIds[index];
//
// const socket = new net.Socket();
//
// socket.connect({
//     host: HOST,
//     port: PORT,
//     keepAlive: true,
// });
//
// socket.write(encode(id));
//
// socket.on('data', buffer => {
//     const result = decode(buffer);
//     console.log(`课程 ID ${id} 所对应的课程名称为 ${result}!`);
//
//     index = Math.floor(Math.random() * lessonIds_length);
//     id = lessonIds[index];
//     socket.write(encode(id));
// });
//
// function encode(id) {
//     const body = Buffer.alloc(PACKAGE_BODY_LENGTH);
//     body.writeInt32BE(id);
//     return body;
// }
//
// function decode(buffer) {
//     return buffer.toString();
// }

console.log('nodejs rpc 半双工通信部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');


