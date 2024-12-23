// async/await 完整版
// (async function () {
//     try {
//         await interview(1);
//         await interview(2);
//         await interview(3);
//         console.log('smile!');
//     } catch (error) {
//         console.log(`cry at round ${error.round}!`);
//     }
// })();
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
//         }, 888);
//     });
// }

console.log('nodejs async/await 处理异步事件部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
