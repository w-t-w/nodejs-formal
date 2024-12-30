// const path = require('path');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
//
// const client = require('./lib');
// const template_source = require('../template');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, '../source');
// const TEMPLATE_DIR = path.resolve(__dirname, '../template/index.html');
//
// const koa = new Koa();
//
// const template = template_source(TEMPLATE_DIR);
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/favicon.ico', ({response}) => {
//     response.status = 400;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/', async ({request, response}) => {
//     const {query: {column_id = 0}} = request;
//
//     const result = await new Promise((resolve, reject) => {
//         client.write({
//             column_id
//         }, (err, data) => {
//             return err ? reject(err) : resolve(data);
//         });
//     });
//
//     response.status = 200;
//     response.body = template(result);
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The client page is running at http://localhost:${PORT}!`);
// });

console.log('nodejs 极客时间详情页部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');

