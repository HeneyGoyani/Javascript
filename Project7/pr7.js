// 1) Create a School class and create a student and faculty method. 
// The Student method gives the student name, email and contact number as arguments 
// and prints all details the same as faculty using class & object. (3 marks)


class school {
    student (name, email , contactNumber){
        console.log("Student Detail..");
        console.log(`Name : ${name}`);
        console.log(`Email : ${email}`);
        console.log(`Contact : ${contactNumber}`);

    }

    faculty (name , email , contactNumber){
        console.log("Faculty Detail..");
        console.log(`Name : ${name}`);
        console.log(`Email : ${email}`);
        console.log(`Contact : ${contactNumber}`);
    }
}

const myschool = new school();
myschool.student("Heney Goyani","abc@gamil.com","9898771458");
myschool.faculty("Grirish Sir ","sir@gamil.com","6355802300");


// 2) Create a Person class with an argument name and age. 
// Create an Employee class that prints out details of the Person class. (3 marks)

class Person {
    constructor (name , age , gender ){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Employee extends Person{
    details(){
        console.log("Empolyees Details...");
        console.log(`Name :${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Gender : ${this.gender}`);
    }
}

let Print = new Employee("Resha Nakrani","19","Female");
Print.details();

// 3) Employee class creates a constructor called print a simple message. (1 mark)

class employeeMessage {
    constructor()
    {
        console.log("Messgae For Employees : to work until 10 PM!!");
    }
}

let Message = new employeeMessage();

// 4) Create a Shape class and create a rectangle and circle method 
// to find the circle area (3.14*r*r) and rectangle area (width*height) using arguments. (3 marks)
class shape {

    rectangeArea(width,height){
        let area = width * height;
        console.log(`Area Of Rectangle : ${area}`);
    }

    circleArea(radius){
        let area = 3.14*radius*radius;
        console.log(`Area Of Cirle : ${area} `);
    }
}

let area = new shape();
area.rectangeArea(15,5);
area.circleArea(20);



