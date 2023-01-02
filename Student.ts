import { Person } from './Person.js'

export class Student extends Person {
    private _name: string;

    constructor() {
        super();
        this._name = "Sameer";

    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}