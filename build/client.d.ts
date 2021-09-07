declare type ClientAnswerOptions = {
    debug?: object;
};
declare class Client {
    name: string;
    correct_answer: string;
    know_answer: any;
    constructor(name?: string);
    answer(quest: string, opt?: ClientAnswerOptions): string | {
        answer: string;
    };
    train(dialogs?: {}): void;
}
export default Client;
