module.exports = (player_selection) => {
    const game_selection = ['scissor', 'rock', 'paper'],
        game_selection_length = game_selection.length;

    const computer_random = Math.floor(Math.random() * game_selection_length);

    let player_index = computer_random + 1;
    if (player_index >= game_selection_length) player_index = 0;

    const computer_selection = game_selection[computer_random];

    console.log('游戏结果为:');
    console.log(`玩家: ${player_selection}, 电脑: ${computer_selection}`);

    if (player_selection === computer_selection) {
        console.log('平局!');
        return 0;
    } else if (player_selection === game_selection[player_index]) {
        console.log('玩家赢!');
        return 1;
    } else {
        console.log('电脑赢!');
        return -1;
    }
};
