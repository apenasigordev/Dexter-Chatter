"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(name) {
        this.name = name || "Dexter";
        this.correct_answer = "";
    }
    answer(quest, opt = {}) {
        this.know_answer = {
            "what's your name?": `My name is ${this.name}`,
            "hi": "hello",
            "hello": "hi",
            "How are you?": "fine."
        };
        this.correct_answer = this.know_answer[quest] || "Sorry, I do not understand";
        if (opt.debug)
            return opt.debug = { answer: this.correct_answer };
        return this.correct_answer;
    }
    train(dialogs = {}) {
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map