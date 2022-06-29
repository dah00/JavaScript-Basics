// log on the console to print something 
console.log('Hello World');

// Declaring a variable in JavaScript 
let name = 'Obeda';
 
// constant variable
const interestRate = 0.3;

// Dynamic type language = type of the variable can be changed at runtime
let age = 30;
let isApproved = true;
let firstName = 'John';
let lastName = 'Smith';
let x = undefined
let selectedColor = null;

typeof isApproved;      // in the runtime you can check the variable type

firstName = 1;          // Redefining the type of a variable 
console.log(firstName);

// Reference variables: Objects, arrays, function
// Object variable
let person = {
    name: 'Obeda',
    age: 30
}

// change value of a property
person.name = 'John';       // Dot Notation
person['age'] = 25;         // Bracket Notation

console.log(person);


// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);

// function
function greet(name){
    console.log('Hello ' + name);
}

function square(number){
    return number * number;
}

greet('Obeda');
console.log(square(2));