// const express = require('express');
// const fs = require('fs');
// const path = require('path');
//
// const game = require('./lib');
//
// const TEMPLATE_DIR = path.join(__dirname, './source/index.html');
//
// const PORT = 3000;
//
// const game_result_config = {
//     0: '平局!',
//     1: '你赢了!',
//     '-1': '你输了!'
// };
//
// const player_won_code = 1;
//
// let player_won_count = 0,
//     same_count = 0,
//     player_last_selection = null;
//
// const app = express();
//
// app.get('/favicon.ico', (req, res) => {
//     res.status(400);
//     res.send('');
//     return false;
// });
//
// app.get('/game', (req, res, next) => {
//     if (player_won_count >= 3 || same_count === 9) {
//         res.status(500);
//         res.send('你太厉害了!我不跟你玩儿了!');
//         return false;
//     }
//
//     if (same_count >= 2) {
//         same_count = 9;
//         res.status(400);
//         res.send('你作弊!');
//         return false;
//     }
//
//     next();
//
//     if (res.playerWon) player_won_count++;
// }, (req, res) => {
//     const {action} = req.query;
//
//     if (player_last_selection && player_last_selection === action) {
//         same_count++;
//     } else {
//         same_count = 0;
//     }
//     player_last_selection = action;
//
//     // const timer = setTimeout(() => {
//     const game_result = game(action),
//         game_transform_result = game_result_config[game_result];
//
//     if (game_result === player_won_code) res.playerWon = true;
//
//     res.status(200);
//     res.type('application/json');
//     res.send(game_transform_result);
//     // clearTimeout(timer);
//     // }, 666);
// });
//
// app.get('/', (req, res) => {
//     res.status(200);
//     res.send(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
// });
//
// app.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log('nodejs express 服务版石头、剪刀与布游戏部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
