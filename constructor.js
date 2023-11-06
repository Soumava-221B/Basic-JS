// 1. object literals
let student = {
    name: "abc",
    rno: 1,
    grade: "X"
}

// 2. using constructor
// constructor: A constructor is a special function that creates and initializes an object instance of a class. 
function Student (name, rno, grade) {
    this.name = name;
    this.rno = rno;
    this.grade = grade;
}

// 3. factory function
function Student(name, rno, grade) {
    return {
        name, 
        rno,
        grade
    }
}

let student2 = new Student("cde", 2, "X");
let student3 = new Student("fgh", 3, "Y");
let student4 = new Student("ytm", 4, "Z");
console.log(student4.name)