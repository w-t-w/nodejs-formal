// const fs = require('fs');
// const path = require('path');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
//
// const PORT = 3000;
//
// // const leak = [];
//
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
// const STATIC_DIR = path.resolve(__dirname, './source');
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/', ({response}) => {
//     response.status = 200;
//     // leak.push(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('nodejs 使用各类性能分析工具实行项目代码性能分析部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
