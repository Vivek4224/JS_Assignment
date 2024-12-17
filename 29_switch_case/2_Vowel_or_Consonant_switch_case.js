function checkVowelConstant(char){
    char = char.toLowerCase()

    switch(char){
        case 'a':
        case 'e':
        case 'i':    
        case 'o':    
        case 'u':
            console.log("this is Vowel");
            break;
        default:
            console.log("this is constant");
            break;
    }
}

checkVowelConstant('A')
checkVowelConstant('F')
checkVowelConstant('c')