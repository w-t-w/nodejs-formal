// const vm = require('vm');
//
// const user = {
//     name: 'Gary_wtw',
//     age: 32,
//     gender: true,
//     hobby: {
//         sports: ['football', 'basketball'],
//         game: 'Black Myth WuKong'
//     }
// };
//
// const template_context = {
//     templateA: '${_(\'<p>\')}I\'m ${user.name}, ${user.age} year\'s old, ${user.gender ? \'boy\' : \'girl\'}, I like ${user.hobby.sports.join(\',\')} sports, I also like ${include(\'templateB\')}${_(\'</p>\')}',
//     templateB: '${_(\`<h1>${user.hobby.game}</h1>\`)}'
// };
//
// const context = vm.createContext({
//     user,
//     _(value) {
//         if (!value) return '';
//         return value
//             .replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#039;');
//     },
//     include(name) {
//         const template = template_context[name];
//         return template();
//     }
// });
//
// Object.entries(template_context).forEach(([key, value]) => {
//     template_context[key] = vm.runInNewContext(`
//     (function() {
//         return \`${value}\`;
//     })
//     `, context);
// });
//
// const templateA = template_context['templateA'];
// const templateA_result = templateA();
// console.log(templateA_result);
// const templateB = template_context['templateB'];
// const templateB_result = templateB();
// console.log(templateB_result);

console.log('nodejs vm 模板引擎普通版部分回溯已通过!如需查看使用,将上述代码的注释剔除即可!');
