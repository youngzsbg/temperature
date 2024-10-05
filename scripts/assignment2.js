
//Convert Celsius to Fahrenheit

function CelsiustoFahrenheit(){
    let Celsius= prompt("Enter temperature in Celsius")
    let temperature= (Celsius * 9/5) + 32
    console.log(temperature)
   
        document.getElementById("result").innerHTML=`<p> The Temperature in Fahrenheit is ${temperature} </p>`;
return temperature;
}


 