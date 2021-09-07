import Dexter from './client'

const client = new Dexter()
console.log(client.answer);
console.log(client.answer("aaa"));
console.log(client.correct_answer);
console.log(client.name)
//console.log(client.answer("Test",{debug: true}))