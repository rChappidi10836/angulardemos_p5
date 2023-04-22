//classes

class  Person{
    name: string ="";
}

const john = new Person();
john.name = "John";
console.log(john);


class Stud{

    private name: string;

    public constructor(name: string){
        this.name=name;
    }

    public getName(): string{
        return this.name;
    }
}

const student1 = new Stud("Jane");
console.log(student1);