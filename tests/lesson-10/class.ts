class Person {
    name: string;
    age: number;
    className: string;

    constructor(name: string, age: number, className: string) {
        this.name = name;
        this.age = age;
        this.className = className;
    }

    printInfo() {
        console.log(`name : ${this.name} \n age : ${this.age} \n class : ${this.className}`);
    }
}


class Student extends Person {

    constructor(name: string, age: number, className: string) {
        super(name, age, className); // gọi các hàm constructor của lớp cha
    }

}

class Teacher extends Person {

    position: string;

    constructor(name: string, age: number, className: string, position: string) {
        super(name, age, className); // gọi các hàm constructor của lớp cha
        this.position = position;
    }
}

const student1: Student = new Student('Loi', 17, "K12");
student1.printInfo();

const teacher1: Teacher = new Teacher("New Teacher", 12, "K12", "Computer science");
teacher1.printInfo();