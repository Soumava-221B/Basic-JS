# Basic-JS

# Intro to JavaScript (16/10/23)
## Agenga
1. History of JS
2. Variables
3. Data Types
3. Chrome dev tools
4. 

Defination of JS: Dynamical typed languages, high level languages, programing language, scripting language

var variable1 = "10";

Data Types
    primitive           non-primitive
        String             Object
        Number
        Bollean
        Null   (a = null)
        Undefined (variable defined but values is not given)
        BigInt (var n = 10n)
        Symbol (var a = Symbol('a unique key'))

typeof -> "abc" String

## Note
When you use symbol it will always give you immutable and unique value

'==' will only check the values of the variables
'===' will check the values and the type of values of the varibales 

## Difference between type conversion and type coercion
In JavaScript, type conversion is the process of explicitly changing the type of a value, while type coercion is the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types.

03/11/23
## Agenda 
- How js works internally
- execution
- call stack
- lexical scoping
- hoisting
- closures

06/11/23
## Agenda
- constructor
- this keyword
- strict mode
- call, apply, bind methods

## Note
1. Never use arrow function in the constructor
2. Arrow function always borow this form the surrounding scope.

14/11/23
## Agenda
1. Synchronous and Asynchronous
2. Callback
3. Promises

16/11/23
## Agenda
1. Async js works internally
2. promises
3. then() catch()
4. async await
5. apis
6. working with apis