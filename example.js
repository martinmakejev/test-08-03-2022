const chalk = require('chalk');
const assert = require('assert');


// test how function works
/* eslint-disable */
console.log(sum(1, 3));
// use also colors to be more "fancy"
console.log(chalk.yellow('9 + -5 ='), chalk.bold.green(sum(9, -5)));
/* eslint-enable */
// examples of testing using assert
assert.equal(sum(2, 3), 5);
assert.equal(sum(9, -5), 4)
assert.equal(sum(9, -5), 4);

assert.notEqual(sum(1, 1), 1);
