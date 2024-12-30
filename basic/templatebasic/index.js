// const vm = require('vm');
//
// const user = {
//     name: 'Gary',
//     age: 31,
//     gender: true,
//     hobby: {
//         sports: ['football', 'basketball'],
//         game: 'Black Myth WuKong'
//     }
// };
// const gary_wtw = `<p>I'm ${user.name}, ${user.age} year's old, ${user.gender ? 'boy' : 'girl'}, I love play ${user.hobby.sports.join(',')} sports, I also like play ${user.hobby.game} game!</p>`;
// console.log(gary_wtw);
//
// const gary_wtw_vm = '`<p>I\'m ${user.name}, ${user.age} year\'s old, ${user.gender ? \'boy\' : \'girl\'}, I love play ${user.hobby.sports.join(\',\')} sports, I also like play ${user.hobby.game} game!</p>`';
// const gary_wtw_vm_result = vm.runInNewContext(gary_wtw_vm, {user});
// console.log(gary_wtw_vm_result);
//
// const gary_wtw_vm_helper = '`${_(\`<p>I\'m ${user.name}, ${user.age} year\'s old, ${user.gender ? \'boy\' : \'girl\'}, I love play ${user.hobby.sports.join(\',\')} sports, I also like play ${user.hobby.game} game!</p>\`)}`';
// const gary_wtw_vm_helper_result = vm.runInNewContext(gary_wtw_vm_helper, {
//     user, _(value) {
//         if (!value) return false;
//         return value
//             .replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     }
// });
// console.log(gary_wtw_vm_helper_result);
//
// const gary_wtw_vm_include = '`${_(\`<p>I\'m ${user.name}, ${user.age} year\'s old, ${user.gender ? \'boy\' : \'girl\'}, I love play ${user.hobby.sports.join(\',\')} sports, I also like play ${include(\'gary_wtw_vm_game\', user)}</p>\`)}`';
// const user_include = {
//     gary_wtw_vm_game(user) {
//         return `<h1>${user.hobby.game}</h1> game!`;
//     }
// }
// const gary_wtw_vm_include_result = vm.runInNewContext(gary_wtw_vm_include, {
//     user,
//     _(value) {
//         if (!value) return false;
//         return value
//             .replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;');
//     },
//     include(name, data) {
//         const template = user_include[name];
//         return template(data);
//     }
// });
// console.log(gary_wtw_vm_include_result);

console.log('nodejs vm 模板引擎简易版部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
