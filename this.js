// 1. global context

//console.log(this);
// function dummy() {
//     console.log(this)
// }
// dummy();

// 2.objects and object method

// let obj = {
//     property1: "sample1",
//     dummy: function() {
//         console.log(this);
//     }
// }

// obj.dummy()

// 3. constructor
// It will always point to the object which was created from that cosntructor function



// ************arrow function********************

// 1. global context
// let dummyArrow = ()=> {
//     console.log(this);
// }

// dummyArrow();

// 2. objects and object method

let obj = {
    property1: "sample1", 
    property2: [1,2,3],
    dummy: () => {
        console.log(this)
    }
}

obj.dummy();

let obj1 = {
    property1: "sample1",
    property2: [1,2,3],
    dummy: function normal() {
        ()=>{
            console.log(this);
        }
    }
}

obj1.dummy();

//3. constructor

//4. this in strict mode

"use strict"
// function test() {
//     console.log(this);
// }

// console.log(this);    // Called in the global scope
// test()