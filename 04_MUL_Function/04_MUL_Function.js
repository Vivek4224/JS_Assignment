// The MUL function is a miniature of the multiplication function. In this function, we call the function that required an argument as a first number, and that function calls another function that required another argument and this step goes on. 

function mul(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}

console.log(mul(4)(5)(6))