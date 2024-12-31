// const path = require('path');
// const fs = require('fs');
// const {renderToString} = require('react-dom/server');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
//
// const {App} = require('../build/ssr_index');
// const client = require('./lib');
// const template_source = require('../template');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, '../source');
// const TEMPLATE_DIR = path.resolve(__dirname, '../template/index.html');
//
// const template = template_source(TEMPLATE_DIR);
//
// const koa = new Koa();
//
// koa.use(KoaStatic(STATIC_DIR));
//
// koa.use(KoaMount('/favicon.ico', ({response}) => {
//     response.status = 400;
//     response.body = '';
//     return false;
// }));
//
// koa.use(KoaMount('/api', async ctx => {
//     const {request, response} = ctx;
//     const {query: {sort = 0, filter = 0}} = request;
//
//     const result = await new Promise((resolve, reject) => {
//         client.write({
//             sort: Number.isNaN(sort) ? 0 : +sort,
//             filter: Number.isNaN(filter) ? 0 : +filter,
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         })
//     });
//
//     response.status = 200;
//     response.body = result;
// }));
//
// koa.use(KoaMount('/', async ctx => {
//     const {request, response} = ctx;
//     const {query: {sort = 0, filter = 0}} = request;
//
//     const result = await new Promise((resolve, reject) => {
//         client.write({
//             sort,
//             filter
//         }, (err, data) => {
//             err ? reject(err) : resolve(data);
//         })
//     });
//
//     const list_union = {
//         reactListString: renderToString(App(result)),
//         reactListData: result,
//         sortInitial: sort,
//         filterInitial: filter
//     };
//
//     response.status = 200;
//     response.body = template(list_union);
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The client page is running at http://localhost:${PORT}!`);
// });

console.log('nodejs 极客时间列表页部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
