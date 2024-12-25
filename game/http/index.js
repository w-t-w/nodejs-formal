// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const url = require('url');
// const querystring = require('querystring');
//
// const game = require('./lib');
//
// const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');
//
// const PORT = 3000;
//
// const player_won_code = 1;
//
// const player_selection_config = {
//     '-1': '你输了!',
//     0: '平局!',
//     1: '你赢了!'
// };
//
// let player_won_count = 0,
//     same_count = 0,
//     player_last_selection = null;
//
// const server = http.createServer((req, res) => {
//     const {pathname, query} = url.parse(req.url);
//
//     if (pathname === '/favicon.ico') {
//         res.writeHead(400);
//         res.end('');
//         return false;
//     }
//
//     if (pathname === '/game') {
//         if (player_won_count >= 3 || same_count === 9) {
//             res.writeHead(500);
//             res.end('你太厉害了!我不跟你玩儿了!');
//             return false;
//         }
//
//         if (same_count >= 2) {
//             same_count = 9;
//             res.writeHead(400);
//             res.end('你作弊!');
//             return false;
//         }
//
//         const {action} = querystring.parse(query);
//
//         const game_result = game(action),
//             game_transform_result = player_selection_config[game_result];
//
//         if (player_last_selection && player_last_selection === action) {
//             same_count++;
//         } else {
//             same_count = 0;
//         }
//         player_last_selection = action;
//
//         if (game_result === player_won_code) player_won_count++;
//
//         res.writeHead(200, {'content-Type': 'application/json'});
//         res.end(game_transform_result);
//     }
//
//     if (pathname === '/') {
//         res.writeHead(200);
//         res.end(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
//     }
// });
//
// server.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('nodejs http 网页服务版石头、剪刀与布游戏部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
