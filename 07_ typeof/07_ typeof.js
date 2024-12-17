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