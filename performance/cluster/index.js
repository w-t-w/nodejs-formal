// const cluster = require('cluster');
// const os = require('os');
//
// if (cluster.isMaster) {
//     const cpus_length = os.cpus().length;
//     for (let i = 0; i < cpus_length / 2; i++) {
//         cluster.fork();
//     }
// } else {
//     require('./app');
// }

console.log('nodejs 多进程集群部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
