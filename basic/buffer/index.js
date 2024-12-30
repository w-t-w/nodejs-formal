// const protoBuf = require('protocol-buffers');
// const fs = require('fs');
// const path = require('path');
//
// const PROTO_DIR = path.resolve(__dirname, './data/personal.proto');
//
// const schema = protoBuf(fs.readFileSync(PROTO_DIR, 'utf-8'), 'utf-8');
//
// const buffer_first = Buffer.from('hello geekBang');
// const buffer_second = Buffer.from([1, 2, 3, 4]);
// const buffer_third = Buffer.alloc(4);
//
// console.log(buffer_first);
// console.log(buffer_second);
// console.log(buffer_third);
//
// buffer_second.writeInt8(20, 1);
// console.log(buffer_second);
// buffer_second.writeInt16BE(512, 2);
// console.log(buffer_second);
// buffer_second.writeInt16LE(512, 2);
// console.log(buffer_second);
//
// const gary_wtw = {
//     name: 'Gary',
//     age: 31,
//     gender: true,
//     hobby: [{
//         id: 1,
//         type: 'sports',
//         type_id: 1,
//         name: 'football',
//         star: 'Beckham'
//     }, {
//         id: 2,
//         type: 'sports',
//         type_id: 1,
//         name: 'basketball',
//         star: 'Curry'
//     }, {
//         id: 3,
//         type: 'game',
//         type_id: 2,
//         name: 'Black Myth WuKong',
//         star: '天命人'
//     }]
// };
//
// const encode = schema.Human.encode(gary_wtw);
// console.log(encode);
// const decode = schema.Human.decode(encode);
// console.log(decode);

console.log('nodejs buffer 二进制数据包处理部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
