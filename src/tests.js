const dexter = require('./client.ts');
const client = dexter();

var answer = client.answer("Test");

console.log(answer);