// Convert temperature Fahrenheit to Celsius? (Conditional logic Question) 

function celsius(fahrenheit){
    return (fahrenheit-32)*5/9
}

let f = 32
let c = celsius(f)
console.log(`fahrenheit convert in celsius is ${c.toFixed(2)}`);