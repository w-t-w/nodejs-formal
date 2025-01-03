const path = require('path');
const fs = require('fs');
const http = require('http');
// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');

const PORT = 3000;

// const leak = [];

const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const STATIC_DIR = path.resolve(__dirname, './static');
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/', ({response}) => {
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

const server = http.createServer((req, res) => {
    res.writeHead(200);
    // 异常监控完成
    // console.log(window.location.href);
    const templateFile = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
    // 内存监控完成
    // leak.push(templateFile);
    res.end(templateFile);
});

server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
    // 僵尸进程监控完成
    // while (true) {
    // }
});
