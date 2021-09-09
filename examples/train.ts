import Dexter from "dexter-chatter"
const client = new Dexter({name: "ExampleBot"});

client.train({
  "hola": "¿Hola! Cómo estás?",
  "hello": "Hello, how are you?",
  "olá": "Olá, como vai você?",
  "¿cuál es tu nombre?": "Mi nombre es ${client.name}",
  "what is your name?": "My name is ${client.name}",
  "qual é o seu nome?": "Meu nome é ${client.name}"
});

client.answer("hola") // returns ¿Hola! Cómo estás?
client.answer("hello") // returns Hello, how are you?
client.answer("olá") // returns Olá, como vai você?
