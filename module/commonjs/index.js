console.log('require commonjs start!');
require('./lib');
console.log('require commonjs end!');

const character = require('./lib/character');

console.log(character);
console.log(character.math(103, 106));

character.dislike = {
    vegetable: 'ginger',
    fruit: 'durian'
};

const timer = setTimeout(function () {
    console.log(character);
    character.car = 'Mercedes-Benz';
    clearTimeout(timer);
}, 500);

const timer_ano = setTimeout(function () {
    console.log(character);
    clearTimeout(timer_ano);
}, 1500);
