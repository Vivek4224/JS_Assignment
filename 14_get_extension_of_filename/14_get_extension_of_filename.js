// Write a JavaScript exercise to get the extension of a filename.? 

function getFileExtention(filename){
    let parts = filename.split(".")

    if (parts.length < 2){
        console.log("no file Extention")
    }

    return parts[parts.length-1]
}

let filename1 = "document.txt"
let filename2 = "document.vc"
let filename3 = "document.vs"
let filename4 = "document.vb"

console.log(`the file extention is ${filename1} :`,getFileExtention(filename1))
console.log(`the file extention is ${filename2} :`,getFileExtention(filename2))
console.log(`the file extention is ${filename3} :`,getFileExtention(filename3))
console.log(`the file extention is ${filename4} :`,getFileExtention(filename4))