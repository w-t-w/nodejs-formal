// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const fs = require('fs');
// const path = require('path');
//
// const gameKoa = require('./module');
//
// const PORT = 3000;
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const koa = new Koa();
//
// koa.use(KoaMount('/favicon.ico', ({response}) => {
//     response.status = 400;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/game', gameKoa));
//
// koa.use(KoaMount('/', async ({response}) => {
//     response.status = 200;
//     response.type = 'html';
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('nodejs koa 解决处理异步事件服务版石头、剪刀与布游戏部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');

