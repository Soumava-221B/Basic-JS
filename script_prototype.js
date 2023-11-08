let person = {
    name: "Alpha",
    age: 18,
    talk: function () {
        console.log('talking now...')
    }
}

person.favColor = "red";
console.log(person);

let person2 = Object.create({   // function to create object
    name:"Beta",
    age: 18,
    talk: function() {
        console.log('hello now...')
    }
})

console.log(person2)