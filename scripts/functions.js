console.log("function");
//function
function sayHello(){
    console.log("Hello");
}

sayHello()//trigger/runs the function

// functions with parameters

function greet(name){
    console.log("Welcome to the system "+ name)

}
greet("Kendall")
greet("David")
//functions that return  values
function addNumbers(a,b){
    return a+b;
}
 let result = addNumbers(3,5);//8..will get overwritten by next line
 result =addNumbers(6,8);//14
 console.log(result);//14

 //function with default parameters
 function greetings(name="Samantha"){
    console.log("Hello to "+name)
 }
 greetings(); //will display Samantha as default
 greetings("Ava");//will display Ava

 // Function Challenge 1 double the number

 //or

 function doubleNumber(num){
    let total = num*2;
    console.log(total);
 }
 doubleNumber(4)
 doubleNumber(10)

 //challenge 2 combine names

 function combineNames(firstName,lastName){
    return firstName+ " "+lastName;
 }
 let studentName = combineNames("Alice", "Wonderland")
 console.log(studentName)

 //challenge 3 conver minutes to seconds

 function convertToSeconds(mins){
    let amount = mins*60
    console.log(amount)
    return amount;

 }
 convertToSeconds(5)
 convertToSeconds(10)

 //using functions in your html and not command prompt

 function sayHello2(){
    let name = prompt("Enter your name: ");
 
 //document.getElementById("result").innerHTML="<p> Welcome to the system " + name + "</p>";// template string or use format below
 
 document.getElementById("result").innerHTML = `<p> Welcome to the system ${name} </p>`;
}