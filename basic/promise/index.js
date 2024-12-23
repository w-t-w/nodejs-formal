// promise 普通版
// interview(1)
//     .then(() => {
//         return interview(2);
//     })
//     .then(() => {
//         return interview(3);
//     })
//     .then(() => {
//         console.log('smile!');
//     })
//     .catch(error => {
//         console.log(`cry at round ${error.round}!`);
//     });
//
// function interview(round) {
//     return new Promise((resolve, reject) => {
//         const timer = setTimeout(() => {
//             const random = Math.random();
//             if (random <= 0.8) {
//                 resolve('success!');
//             } else {
//                 const error = new Error('failed!');
//                 error.round = round;
//                 reject(error);
//             }
//             clearTimeout(timer);
//         }, 666);
//     });
// }

// promise 多重条件
// const company = ['tencent', 'alibaba', 'ant'];
// Promise.all(company.map(item => interview(item)))
//     .then(() => {
//         console.log('smile!');
//     })
//     .catch(error => {
//         console.log(`cry at ${error.name} company!`);
//     });
//
//
// function interview(name) {
//     return new Promise((resolve, reject) => {
//         const timer = setTimeout(() => {
//             const random = Math.random();
//             if (random <= 0.8) {
//                 resolve('success!');
//             } else {
//                 const error = new Error('failed!');
//                 error.name = name;
//                 reject(error);
//             }
//             clearTimeout(timer);
//         }, 1000);
//     });
// }

console.log('nodejs promise 状态机部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
