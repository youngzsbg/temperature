console.log("Script");

//Creating string variables
//keyword nameVariable = value;

let myName = "Jane";
let lastName = "Doe";

console.log(myName);
console.log(lastName)
console.log(myName+ " " +lastName);//concatenation

//creating numerical variables
let myAge = 99;
console.log("Age: " + myAge);

let myGrade = 9.5;
console.log(myGrade);

//creating boolean variables (true or false)
let isAdmin =true;
let isStudent=false;
let booboo=true;
console.log(booboo);

//variables after "let" can be anything example above booboo works just the same as isStudent to be true.

myName="Kendall";
lastName="Payne"
//my name is Kendall Payne and I am 99 years old.
console.log("my name is " + myName + " " +lastName+ ", and I am " + myAge +" years old.");

let number1 = 10;
let number2 = 5;

//addition
let addition = number1 + number2;
console.log(number1 + " + " + number2 + " = " + addition)

//subtraction
let subtraction = number1 - number2;
console.log(number1+" - "+number2+" = "+subtraction)




//constants
//keyword constName = value;

const pi = 3.1416;
//pi= 4.5 wont work, will give error;  // we cant modify a constant
console.log(pi);

// prompt; this is simple way to interact with a user, will make a pop up window

let pet =prompt("Insert your pet name: ")   
console.log("your pet is: " + pet)