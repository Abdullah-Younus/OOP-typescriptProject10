import { Person } from './Person.js';
export class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "Sameer";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
