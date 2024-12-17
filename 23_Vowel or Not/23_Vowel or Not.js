function isVowel(char){
    let vowel = ["a","e","i","o","u"]
    if(vowel.includes(char.toLowerCase())){
        return "this is a vowel"
    }else{
        return "this is not vowel"
    }
}

let char = "D";
let checking = isVowel(char)
console.log(checking);
