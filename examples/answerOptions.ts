import Dexter from "dexter-chatter"
const client = new Dexter({name: "ExampleBot"});

console.log(client.answer("hello", {debug: true})) 
/* returns {
content: "hello",
answer: "hi",
date: Date()
}*/