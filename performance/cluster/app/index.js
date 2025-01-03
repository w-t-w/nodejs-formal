const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const KoaMount = require('koa-mount');
const KoaStatic = require('koa-static');

const PORT = 3000;

const TEMPLATE_DIR = path.resolve(__dirname, './template/index.html');
const STATIC_DIR = path.resolve(__dirname, './source');

const koa = new Koa();

koa.use(KoaStatic(STATIC_DIR));

koa.use(KoaMount('/', ({response}) => {
    response.status = 200;
    response.body = fs.readFileSync(TEMPLATE_DIR, 'utf-8');
}));

koa.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
