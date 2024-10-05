console.log("converting temp")

function ConvertTemperature(){
    let scale= prompt("Enter Scale in C or F");
let temperature= prompt("Enter Temperature Value");
if(scale=="C"){
    let ConvertedTemp= (temperature * 9/5) + 32
    console.log(ConvertedTemp);
   
}else if(scale=="F"){
    ConvertedTemp= (temperature - 32) * 5/9
    console.log(ConvertedTemp)
}else{
    console.log("Scale must  be C or F"); 
}
document.getElementById("result").innerHTML=`<p> The Converted Temperature is ${ConvertedTemp} </p>`;
}
