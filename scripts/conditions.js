console.log("if statements")

//if statements
//if condition
//code to be executed if true

if(1<2){
    console.log(" I am inside the if statement");
}
//if false the console wont log
//if example 2 with variables
// == means both are the same/comparing two items

let studentAge=45;
let studentAge2=45;

if(studentAge == studentAge2){
    console.log("Both are the same")
}
 //if-else statements
 //if(condition){
 // code to be executed if condition is true
//  }else{
//  code to be executed if false}
if("Sam" == "Jesus"){
    console.log("Sam is equal to Jesus");
}else{
    console.log("Sam is different than Jesus");
}

//Challenge
//check if the age is greater than 21
//T: display "you are an adult"
//F: display "you are underage"
let age= 50


if(age>=21){
    console.log("you are an adult")
}else{
    console.log("you are underage")
}

//if-else if-else statements
//if(condition){
//code to be executed if condition1 is true
//}else if (condition2){
//code to be executed if condition2 is true
//}else{
//code to be executed if conditions are false}

age=5;

if(age<13){
    console.log("child");
}else if(age<20){
    console.log("teenager");
}else if(age<64){
    console.log("adult")
}else{
    console.log("senior");
}

//challenge 4
age= prompt("Enter your age")


if(age<12){
    console.log("your ticket price is $5")
}else if(age<18){
    console.log("your ticket price is $8")
}else{
    console.log("your ticket price is $10")
}
//challenge 5

teperature=prompt("Enter temperature in Celsius")

if(teperature<15){
    console.log("wear a jacket")
}else if(temperature<=25){
    console.log("wear a sweater")
}else{
    console.log("wear a t-shirt")
}
//using logical AND operator also known as &&
age=10;

if(age<13){
    console.log("child")
}else if(age>=13 && age<=19){
    console.log("teenager")
}else if(age>20 && age<=64){
    console.log("adult")
}else{
    console.log("you are older than 64")
}

