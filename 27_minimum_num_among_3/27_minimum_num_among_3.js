let num1 = 3
let num2 = 1
let num3 = 2

let min = (num1 < num2 && num1 < num3)? num1 : (num2 < num1 && num2 < num3 ? num2 : num3)

console.log(`the min num is ${min}`);
