// const game = require('./lib');
//
// const player_win_code = 1;
//
// let player_win_count = 0;
//
// console.log('第一届石头、剪刀与布游戏大赛现在开始!');
// console.log('请输入游戏指定的选项(scissor rock or paper):');
//
// process.stdin.on('data', (data) => {
//     const player_selection = data.toString().trim();
//     const result = game(player_selection);
//     if (result === player_win_code) player_win_count++;
//
//     if (player_win_count >= 3) {
//         console.error('你太厉害了!我不跟你玩儿了!');
//         process.exit(1);
//     }
//
//     console.log('请继续输入游戏指定的选项(scissor rock or paper):');
// });

console.log('nodejs commonjs 模块版石头、剪刀与布游戏部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
