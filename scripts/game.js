let hungerLevel = 30
const hungerDisplay = document.getElementById("hungerLevel");

function feedPet(){
    console.log("Feeding the pet")
let foodAmount = 10;

//create a variable foodAmount
hungerLevel-=foodAmount;
// hungerLevel-=foodAmount is the same as hungerLevel = hungerLevel - foodAmount;
//discount the foodAmount from the hunger
if(hungerLevel<0){
    alert("your pet is overfed!!");
}

hungerDisplay.innerHTML=hungerLevel;
}