type ClientAnswerOptions = {
    debug?: object;
}

class Client {
	name: string;
    correct_answer: string;
	     know_answer: any;
	constructor(name?: string) {
        this.name = name || "Dexter";
        this.correct_answer = "";
	}
    
    answer(quest: string, opt: ClientAnswerOptions = {}) {	
		this.know_answer = {
            "what's your name?": `My name is ${this.name}`,
					 "hi": "hello",
			     "hello": "hi",
			     "How are you?": "fine."
           };
this.correct_answer=this.know_answer[quest] || "Sorry, I do not understand";
		if(opt.debug) return opt.debug = {answer: this.correct_answer};
		return this.correct_answer;
	}
    train(dialogs = {}) {
			
		}
}

export default Client;