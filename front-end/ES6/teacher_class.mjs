import {Person} from "./person_class.mjs"


//Inheritance
class Teacher extends Person{
    constructor(name, job){

        super(name);
        this.occupation = job;
    }

    teach(){
        console.log("teaching")
    }
}


const teacher = new Teacher("Rahul", "System Design Professor");

console.log(teacher);