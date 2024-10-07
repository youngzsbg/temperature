document.write("<h2> For Loops </h2>")

//Activity 1
document.write(`<h2> Table of 2!</h2>`)
//document.write("<p> 2 X 0 = 0</p>")
//document.write("<p> 2 X 1 = 2</p>")
//document.write("<p> 2 X 2 = 4</p>")
//document.write("<p> 2 X 3 = 6</p>")
//document.write("<p> 2 X 4 = 8</p>")
//document.write("<p> 2 X 5 = 10</p>")
//document.write("<p> 2 X 6 = 12</p>")
//document.write("<p> 2 X 7 = 14</p>")
//document.write("<p> 2 X 8 = 16</p>")
//document.write("<p> 2 X 9 = 18</p>")
//document.write("<p> 2 X 10 = 20</p>")

//or you can write the above like
//document.write(
//     "<p> 2 X 0 = 0</p>
//      <p> 2 X 1 = 2</p>
//      <p> 2 X 2 = 4</p>
//      <p> 2 X 3 = 6</p>
//      <p> 2 X 4 = 8</p>
//      <p> 2 X 5 = 10</p>
//      <p> 2 X 6 = 12</p>
//      <p> 2 X 7 = 14</p>
//      <p> 2 X 8 = 16</p>
//      <p> 2 X 9 = 18</p>
//      <p> 2 X 10 = 20</p>"
//     )


//For Loops = for(starting_value; stopping_value; interval){
//          activities}
//index++ = index + 1
// for loop example: 

//for(let index=0;index<10;index++){
  //  console.log("using for loops")
//}
//Activity 1 with for loop
for (let i = 0; i <= 10; i++) {
    let result= 2*i;
    document.write(`<p> 2 X ${i} = ${result} </p>`)
    
}
//Activity 3   this code is going to count to 10 starting wit 1
//for (let index = 1; index <= 10; index++) {
//    document.write(`<p>${i}<p/p>`)
//}


//Activity 4    increments of 2 up to less than 21

for(let i=2; i<21; i +=2){   //+=2 means increments of 2 instead of ++ default of add 1
    console.log(i);
}

//Mini Challenge
//create a loop that displays the numbers 1 to 100 and
// display message "I found it" instead of 50
//the loop needs to be inside of a function

function counting(){
for (let i = 0; i<= 100; i++) {
    if(i ==50){
        console.log("I found it")
    }else{
        console.log(i)
        }
    }
}
counting()

//Interactive multiplication tables
let number = prompt("Enter the number of the table you want to display: ")
function multTable(num){
    document.write(`Multi table of ${num}`)
    for (let i = 0; i <= 10 ; i++) {
        let result = num*i
        document.write(`<p> ${num} x ${i} = ${result} </p>`)
    }
}
multTable(number)
//while loops , counting to ten using while loop
// let i = 0
// while (i<=10){
//        console.log(i)
//        i++
//}
//for loop is more commonly used over while