module.exports = (player_selection) => {
    const game_selections = ['scissor', 'rock', 'paper'],
        game_selections_length = game_selections.length;

    if (!game_selections.includes(player_selection)) {
        console.error('请输入与当前游戏相关的选项(scissor rock or paper).');
        process.exit(1);
        return false;
    }

    const computer_random = Math.floor(Math.random() * game_selections_length);

    let player_index = computer_random + 1;
    if (player_index >= game_selections_length) player_index = 0;

    const computer_selection = game_selections[computer_random];

    console.log('游戏结果为:');
    console.log(`玩家: ${player_selection}, 电脑: ${computer_selection}`);

    if (computer_selection === player_selection) {
        console.log('平局!');
        return 0;
    } else if (game_selections[player_index] === player_selection) {
        console.log('玩家赢!');
        return 1;
    } else {
        console.log('电脑赢!');
        return -1;
    }
};
