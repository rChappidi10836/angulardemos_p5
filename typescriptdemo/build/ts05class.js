"use strict";
//classes
class Person {
    constructor() {
        this.name = "";
    }
}
const john = new Person();
john.name = "John";
console.log(john);
class Stud {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const student1 = new Stud("Jane");
console.log(student1);
