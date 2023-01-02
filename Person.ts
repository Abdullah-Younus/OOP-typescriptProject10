export class Person {

    private personality: string;

    constructor() {
        this.personality = "MyStery"
    }
    public AskQuestion(answer: number): void {
        if (answer == 1) {
            this.personality = "Extravert"
        }
        else if (answer == 2) {
            this.personality = "Introvert"
        }
        else {
            this.personality = "You are Still a Mystery"
        }
    }

    public GetPersonlity(): string {
        return this.personality;
    }

}