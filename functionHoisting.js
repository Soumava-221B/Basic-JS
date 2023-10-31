console.log(u1, u2, u3);

/*
Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their scope before code execution. This means that no matter where variables and functions are declared, they are moved to the top of their scope, regardless of whether their scope is global or local.
*/
let u1 = sayHello("alpha123");
let u2 = sayHello("beta789");
let u3 = sayHello("gamma567");

function sayHello(username) {
    // console.log("Hello ",username);
    return "\ncooldude_"+username;
}

let res = add(4, 7)

//function expression
let add = function(a, b) {
    return a + b;
}

console.log(res)