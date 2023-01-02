import { Person } from './Person.js'


class Program {
    static Main(): void {
        console.log("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself");
        const obj = new Person();
        obj.AskQuestion(2)
        console.log('Person Obj ====>', obj);
        console.log('Get Personlity Method:', obj.GetPersonlity());
    }
}




Program.Main();




