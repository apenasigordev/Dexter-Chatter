import Dexter from "dexter-chatter"
const client = new Dexter({name: "ExampleBot"});

console.log(client.answer("hello")) // returns hi
