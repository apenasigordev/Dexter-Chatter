"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(name) {
        this.name = name || 'Dexter';
        this.correct_answer = '';
        this.know_answer = {
            "what's your name?": `My name is ${this.name}`,
            hi: 'Hello',
            hello: 'Hi',
            'how are you?': 'Fine.'
        };
        this.dialogs = {};
    }
    answer(question, opt = {}) {
        var _a;
        this.correct_answer = (_a = this.know_answer[question]) !== null && _a !== void 0 ? _a : 'Sorry, I do not understand.';
        return opt.debug
            ? {
                content: question,
                answer: this.correct_answer,
                date: new Date()
            }
            : this.correct_answer;
    }
    train(dialogs) {
        this.know_answer = dialogs;
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map