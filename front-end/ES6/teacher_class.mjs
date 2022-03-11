
import Person, {courses} from "./person_class.mjs"

// Named Exports
// Default Exports


// Inheritance 
class Teacher extends Person{
    constructor(name, job){
        super(name);
        this.occupation = job;
    }

    teach(){
        console.log("Teach")
    }
}

const teacher = new Teacher("Rahul", "System Design Professor");

console.log(teacher)

console.log(courses)