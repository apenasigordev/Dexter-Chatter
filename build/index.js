"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const client = new client_1.default();
console.log(client.answer);
console.log(client.answer("aaa"));
console.log(client.correct_answer);
console.log(client.name);
//console.log(client.answer("Test",{debug: true}))
//# sourceMappingURL=index.js.map