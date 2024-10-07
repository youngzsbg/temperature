let scale= prompt("Enter Scale in C or F");
let startValue= prompt("Enter A Starting Temperature");
let endValue= prompt("Enter An End Value")

function convertTemperatureRange(){
    for (let i = startValue; i <= endValue; i++) {
        if(scale=="C"){
            let temperature = (i * 9/5) + 32;
            console.log(temperature);
            document.write(`<p> ${i} degrees Celsius is equal to ${temperature} degrees Fahrenheit`)
        
           
        }else if(scale=="F"){
            temperature= (i - 32) * 5/9;
            console.log(temperature);
            document.write(`<p> ${i} degrees Fahrenheit is equal to ${temperature} degrees Celsius`)

        }
        
    }
} 

convertTemperatureRange()