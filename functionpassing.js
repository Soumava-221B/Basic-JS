function sayHello() {
    console.log("hello user");
}

function greet(hellofn) {
    hellofn();

    function doSomething() {
        console.log("doing something");
    }
    return doSomething;
    // do the remainging job
}

greet(sayHello);