// const cluster = require('cluster');
// // const os = require('os');
//
// const utils = require('./utils');
//
// let timer_exit = null,
//     interval_memory = null;
//
// if (cluster.isMaster) {
//     // const os_cpu_length = os.cpus().length;
//     // for (let i = 0; i < os_cpu_length / 2; i++) {
//     // for (let i = 0; i < 1; i++) {
//     let worker = cluster.fork();
//     utils.heartbeat(worker);
//     // const worker = cluster.fork();
//     // interval_heartbeat = setInterval(() => {
//     //     console.log('ping!');
//     //     worker.send('ping!');
//     //     heartbeat_count++;
//     //     if (heartbeat_count >= 3) {
//     //         process.kill(worker.process.pid);
//     //         clearInterval(interval_heartbeat);
//     //     }
//     // }, 500);
//     //
//     // worker.on('message', (message) => {
//     //     if (message === 'pong!') {
//     //         console.log('pong!');
//     //         heartbeat_count--;
//     //     }
//     // });
//     // }
//
//     cluster.on('exit', () => {
//         timer_exit = setTimeout(() => {
//             worker = cluster.fork();
//             utils.heartbeat(worker);
//             clearTimeout(timer_exit);
//         }, 888);
//     });
// } else {
//     // 异常监控
//     process.on('uncaughtException', (err) => {
//         console.error(err);
//         process.exit(1);
//     });
//     // 内存监控
//     interval_memory = setInterval(() => {
//         const rss = process.memoryUsage().rss;
//         if (rss > 700 * 1024 * 1024) {
//             console.log('oom!');
//             process.exit(1);
//             clearInterval(interval_memory);
//         }
//     }, 666);
//     // 僵尸进程监控
//     process.on('message', (message) => {
//         if (message === 'ping!')
//             process.send('pong!');
//     });
//     require('./app');
// }

console.log('nodejs 多进程守护与管理部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
