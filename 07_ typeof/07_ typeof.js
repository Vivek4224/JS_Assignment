// Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

let str = '10';
num = 10

if(Number(str)===num){
    console.log("They are Equaly same");
}else{
    console.log("They are Not same");
    // convert str in string to Num
    str = Number(str)
    console.log(str === num);
}