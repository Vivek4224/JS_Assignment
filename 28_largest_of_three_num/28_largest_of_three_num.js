function largestNum(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3){
        return num1
    }else if(num2 >= num1 && num2 >= num3){
        return num2
    }else{
        return num3
    }
}

let num = largestNum(100,50,30);
console.log(num);
