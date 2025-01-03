// const fs = require('fs');
// const path = require('path');
// const Koa = require('koa');
// const KoaStatic = require('koa-static');
// const KoaMount = require('koa-mount');
//
// const PORT = 3000;
//
// const leak = [];
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const STATIC_DIR = path.resolve(__dirname, './source');
//
// const template = fs.readFileSync(TEMPLATE_DIR);
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/', ({response}) => {
//     leak.push(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     response.status = 200;
//     response.type = 'html';
//     response.body = template;
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log("nodejs 内存分配策略检测内存泄漏或者溢出部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!");
