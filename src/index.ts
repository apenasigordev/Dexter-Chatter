import Dexter from './client'

const client = new Dexter("Moon")
client.train({"hello": "sup"})
console.log(client)
console.log(client.answer);
console.log(client.answer("hello"));
console.log(client.correct_answer);
console.log(client.name)
console.log(client.answer("Test",{debug: true}))