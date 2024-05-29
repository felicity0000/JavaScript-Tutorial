//alert('hello from the JavaScript file');
// JS console
console.log("hello enzo");
console.log(100);
console.log(100, true, "tate");

//adding css
const styles='padding:10px; backgroubd-color:white; color:green';
console.log('%cHello world', styles);

//JS commenting
//1.used to explain what a give piece of code does
//2.used to crop out code that won't be used.

// single-line comment.

/*
  this is a multi-line comment.
*/

//JS variables
/*
variables are just containers for pieces of data
ways to declare a variable
var, (let, const) block scoped
*/

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName);

//Naming convensions
//-only letters, numbers, underscores and dollar signs
//-can't start with a number


//re-assigning variables
let age = 22;
console.log(age)

age = 30;
console.log(age)

//primitive data types: stored in the stack
/*
String
Number
Boolean
Null - intentional absence of values
Undefined - varable not yet defined
Symbol
BigInt - really big intergers
*/

//Referrence Types(Objects) or non-primitive: stored in the heap
//{Object literals, arrays and functions}

const Name = 'sarah';

// output
console.log(Name);
document.write(Name);
// alert(Name);
document.getElementById("result").innerHTML = Name;

//boolean
let isReading = true;
let isSleeping = false;

//Number
let a = 5;
let b = 10.545;

console.log(a)
console.log(a+b)

let emptyObject = {};
let person = {"name":"Clark", "surname":"Kent", "age":"36"};
console.log(person);

//array
let colors = ['red', 'yellow', 'green', 'orange'];
console.log(colors[0]);

// function data type
let greeting = function() {
    return 'hello world';
}
alert(greeting());
