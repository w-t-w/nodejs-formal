const Koa = require('koa');

const game = require('../lib');

const game_result_config = {
    '-1': '你输了!',
    0: '平局!',
    1: '你赢了!'
};

const player_won_code = 1;
let player_won_count = 0,
    same_count = 0,
    player_last_selection = null;

const gameKoa = new Koa();

gameKoa.use(async (ctx, next) => {
    const {request, response} = ctx;
    const {query: {action}} = request;
    if (player_won_count >= 3 || same_count === 9) {
        response.status = 500;
        response.body = '你太厉害了!我不跟你玩儿了!';
        return false;
    }

    if (same_count >= 2) {
        same_count = 9;
        response.status = 400;
        response.body = '你作弊!';
        return false;
    }

    if (player_last_selection && player_last_selection === action) {
        same_count++;
    } else {
        same_count = 0;
    }
    player_last_selection = action;

    await next();

    if (ctx.player_won) player_won_count++;
});

gameKoa.use(async ctx => {
    const {request, response} = ctx;
    const {query: {action}} = request;
    await new Promise(resolve => {
        const timer = setTimeout(() => {
            const game_result = game(action),
                game_transform_result = game_result_config[game_result];

            if (game_result === player_won_code) ctx.player_won = true;

            response.status = 200;
            response.body = game_transform_result;
            resolve();
            clearTimeout(timer);
        }, 666);
    });
});

module.exports = gameKoa;
