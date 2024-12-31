// const path = require('path');
// const fs = require('fs');
// const Koa = require('koa');
// const KoaMount = require('koa-mount');
// const KoaStatic = require('koa-static');
// const {graphqlHTTP} = require('koa-graphql');
//
// const schema = require('./schema');
//
// const PORT = 3000;
//
// const STATIC_DIR = path.resolve(__dirname, './source');
// const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
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
// koa.use(KoaMount('/api', graphqlHTTP({
//     schema
// })));
//
// koa.use(KoaMount('/', ({response}) => {
//     response.status = 200;
//     response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
// }));
//
// koa.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('nodejs 极客时间视频页部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
