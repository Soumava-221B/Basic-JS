let u1 = sayHello("alpha123");
let u2 = sayHello("beta789");
let u3 = sayHello("gamma567");

console.log(u1, u2, u3);

// function declaration
function sayHello(username) {
    // console.log("Hello ",username);
    return "\ncooldude_"+username;
}

//function expression
let add = function(a, b) {
    return a + b;
}

let res = add(4, 7)
console.log(res)