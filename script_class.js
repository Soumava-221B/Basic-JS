// declaration
class Person {
    name
    constructor(n) {
        this.name = n;
    }
}

// expression
const Person2 = class {
    name
    constructor(n) {
        this.name = n;
    }
}
const p = new Person('cuvette')
const p2 = new Person2('tech')
console.log(p.name);
console.log(p2.name);

//inheritance
class Teacher extends Person{
    constructor(name) {
        super(name)
    }
}

const t = new Teacher('teacherrrrr');
console.log(t.name)