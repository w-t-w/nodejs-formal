// let timer = null;
//
// const loop = {
//     queue: [],
//     eventQueue: [],
//     timerQueue: [],
//     init() {
//         if (timer) {
//             clearTimeout(timer);
//             timer = null;
//         }
//         while (this.queue.length) {
//             const callback = this.queue.shift();
//             callback();
//         }
//         timer = setTimeout(this.init.bind(this), 500);
//     },
//     add(callback) {
//         this.queue.push(callback);
//     }
// };
//
// loop.init();
//
// loop.add(function () {
//     console.log('Black_Myth_WuKong');
// });
//
// const timer_first = setTimeout(function () {
//     loop.add(function () {
//         console.log('Olden Ring');
//     });
//     clearTimeout(timer_first);
// }, 800);
//
// const timer_second = setTimeout(function () {
//     loop.add(function () {
//         console.log('Astro Bot');
//     });
//     clearTimeout(timer_second);
// }, 1600);
//
// const timer_third = setTimeout(function () {
//     loop.add(function () {
//         console.log('FF7');
//     });
//     clearTimeout(timer_third);
// }, 2000);
//
// const timer_fourth = setTimeout(function () {
//     loop.add(function () {
//         console.log('The Animal Well');
//     });
//     clearTimeout(timer_fourth);
// }, 3000);
//
// const timer_fifth = setTimeout(function () {
//     loop.add(function () {
//         console.log('Dark Souls III');
//     });
//     clearTimeout(timer_fifth);
// }, 4000);

console.log('nodejs loop 事件循环机制部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
