type ClientAnswerOptions = {
  debug?: boolean;
};

type AnswerDebug = {
  content: string;
  answer: string;
  date: Date;
};

class Client {
  name: string;
  correct_answer: string;
  know_answer: Record<string, string>;
  dialogs: Record<string, any>;

  constructor(name?: string) {
    this.name = name || 'Dexter';
    this.correct_answer = '';
    this.know_answer = {
      "what's your name?": `HOW SO YOU DON'T KNOW MY NAME?`,
      hi: 'Hello and Shut, up',
      hello: 'Hi ur... grrr',
      'how are you?': '... ur ... GO WASH THE DISHES',
      "where is my father?":"He never came back..."
    };
    this.dialogs = {};
  }

  answer(question: string, opt: ClientAnswerOptions = {}): string | AnswerDebug {
    this.correct_answer = this.know_answer[question] ??
      'Sorry, I do not understand.';

    return opt.debug
      ? {
        content: question,
        answer: this.correct_answer,
        date: new Date()
      }
      : this.correct_answer;
  }

  train<T extends Record<string, any>>(dialogs: T) {
    this.know_answer = dialogs;
  }
}

export default Client;
