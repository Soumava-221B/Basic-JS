function sayHello(username) {
    // console.log("Hello ",username);
    return "\ncooldude_"+username;
}

// sayHello("Shawn");
// sayHello("alpha23");
// sayHello("Omega");

let u1 = sayHello("alpha123");
let u2 = sayHello("beta789");
let u3 = sayHello("gamma567");

console.log(u1, u2, u3);