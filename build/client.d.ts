declare type ClientAnswerOptions = {
    debug?: boolean;
};
declare type AnswerDebug = {
    content: string;
    answer: string;
    date: Date;
};
declare class Client {
    name: string;
    correct_answer: string;
    know_answer: Record<string, string>;
    dialogs: Record<string, any>;
    constructor(name?: string);
    answer(question: string, opt?: ClientAnswerOptions): string | AnswerDebug;
    train(dialogs: Record<string, any>): void;
}
export default Client;
