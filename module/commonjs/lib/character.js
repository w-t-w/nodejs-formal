exports.name = 'wtw';
exports.age = 31;
exports.gender = 'male';
exports.hobby = {
    sports: 'basketball',
    game: 'Black_Myth_WuKong'
};
exports.math = function (first, second) {
    return first * second;
};

const timer = setTimeout(function () {
    console.log(exports);
    exports.car = 'BMW';
    clearTimeout(timer);
}, 1000);

const timer_ano = setTimeout(function() {
    console.log(exports);
    exports.car = 'AITO';
    clearTimeout(timer_ano);
}, 2000);

module.exports = {
    name: '黑神话w-t-w',
    age: 28,
    gender: 'female',
    hobby: {
        sports: 'football',
        game: 'Olden Ring'
    },
    math: function (first, second) {
        return first + second;
    },
    car: 'XIAOMI SU7'
};
