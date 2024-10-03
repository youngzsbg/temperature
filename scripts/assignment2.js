
//Convert Celsius to Fahrenheit
function CelsiustoFahrenheit(){
    let Celsius= prompt()
    let temperature= (Celsius * 9/5) + 32
    console.log(temperature)
    return temperature;
    
    document.getElementById("result").innerHTML `<p> The Temperature in Fahrenheit is ${temperature} <p
/p>`;

}