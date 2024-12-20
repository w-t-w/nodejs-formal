// callback 简易版
// try {
//     interview(function (result) {
//         if (result) console.log('smile!');
//     });
// } catch (err) {
//     console.error(err);
//     console.log('cry!');
// }
//
// function interview(callback) {
//     const timer = setTimeout(function () {
//         const random = Math.random();
//         if (random <= 0.8) {
//             callback('success!');
//         } else {
//             throw new Error('failed!');
//         }
//         clearTimeout(timer);
//     }, 800);
// }

// callback 进阶版
// interview(function (err, result) {
//     if (err) return console.log('cry!');
//     if (result) console.log('smile!');
// });
//
// function interview(callback) {
//     const timer = setTimeout(function () {
//         const random = Math.random();
//         if (random <= 0.8) {
//             callback(null, 'success!');
//         } else {
//             const error = new Error('failed!');
//             callback(error);
//         }
//         clearTimeout(timer)
//     }, 900);
// }

// callback 完整版
// interview(function (err) {
//     if (err) return console.log(`cry at round ${err.round}!`);
//     interview(function (err) {
//         if (err) return console.log(`cry at round ${err.round}!`);
//         interview(function (err, result) {
//             if (err) return console.log(`cry at round ${err.round}!`);
//             if (result) console.log('smile!');
//         }, 3);
//     }, 2);
// }, 1);
//
// function interview(callback, round) {
//     const timer = setTimeout(function () {
//         const random = Math.random();
//         if (random <= 0.8) {
//             callback(null, 'success!');
//         } else {
//             const error = new Error('failed');
//             error.round = round;
//             callback(error);
//         }
//         clearTimeout(timer);
//     }, 700);
// }

console.log('nodejs callback 回调函数部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
