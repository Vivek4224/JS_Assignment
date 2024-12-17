// Write a JavaScript Program to find the area of a triangle ?

function TriangleArea(base,height){
    return ((base*height)/2)
}

let baseLength = 10
let heightLength = 5
let area = TriangleArea(baseLength,heightLength)

console.log(`area of triangle is ${area}`)