// function outer(){
//     let outerVariable = 100;
//     function inner(){
//         console.log(outerVariable);
//     }
//     return inner
// }

// let outerResult = outer()
// outerResult();

let parentVariable = 10;
function outer(){
    let outerVariable = 100;

    function inner(){
        console.log(outerVariable);
    }
    
    return inner;
}

let outerResult = outer()

outerResult();