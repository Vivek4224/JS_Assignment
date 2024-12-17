function numberCheck(num){
    if(num < 0){
        return "The num is Negative"
    }else if(num > 0){
        return "The num is Positive"
    }else{
        return "The num is Zero"
    }
}

let num = -200;
let result = numberCheck(num)
console.log(result)