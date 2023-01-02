export class Person {
    personality;
    constructor() {
        this.personality = "MyStery";
    }
    AskQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are Still a Mystery";
        }
    }
    GetPersonlity() {
        return this.personality;
    }
}
