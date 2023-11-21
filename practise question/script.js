function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById("add").innerHTML = "Invalid input";
    } else {
        let result = parseFloat(num1) + parseFloat(num2);
        document.getElementById("add").innerHTML = result;
    }
}

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById("subtract").innerHTML = "Invalid input";
    } else {
        let result = parseFloat(num1) - parseFloat(num2);
        document.getElementById("subtract").innerHTML = result;
    }
}

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById("multiply").innerHTML = "Invalid input";
    } else {
        let result = parseFloat(num1) * parseFloat(num2);
        document.getElementById("multiply").innerHTML = result;
    }
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(isNaN(num1) || isNaN(num2)) {
        document.getElementById("divide").innerHTML = "Invalid input";
    } else {
        let result = parseFloat(num1) / parseFloat(num2);
        document.getElementById("divide").innerHTML = result;
    }
}