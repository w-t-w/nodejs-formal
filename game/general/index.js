// const params = process.argv,
//     params_length = params.length;
//
// const player_selection = params[params_length - 1];
//
// const game_selections = ["scissor", "rock", "paper"],
//     game_selections_length = game_selections.length;
//
// if (!game_selections.includes(player_selection)) {
//     console.error("请输入与当前游戏相关的选项(scissor rock or paper).");
//     process.exit(1);
// }
//
// const computer_random = Math.floor(Math.random() * game_selections_length);
//
// const computer_selection = game_selections[computer_random];
//
// let player_index = computer_random + 1;
// if (player_index >= game_selections_length) player_index = 0;
//
// console.log("游戏结果:");
// console.log(`玩家: ${player_selection}, 电脑: ${computer_selection}`);
// if (player_selection === computer_selection) {
//     console.log("平局!");
// } else if (player_selection === game_selections[player_index]) {
//     console.log("玩家赢!");
// } else {
//     console.log("电脑赢!");
// }

console.log('nodejs 普通石头、剪刀与布游戏部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
