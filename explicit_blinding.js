let student = {
    name: "abs",
    majors: "IT",
    printInfo: function(){
        console.log(this.name+ " of " + this.majors + " department ");
    }
}

let teacher = {
    name: "Dr. XYZ",
    majors: "CS",
    experience: 5,
}

// student.printInfo();
// call, apply, bind are almost the same things
student.printInfo.call(teacher,1,2);
student.printInfo.apply(teacher, )
student.printInfo.bind()