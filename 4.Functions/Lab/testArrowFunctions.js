/*
function addNum(num1,num2) {
    
    let sum = num1 +num2;

    return sum
}
let result = addNum(2,3)
console.log(result);


*/
//function expretions

let addNumber = function(num1,num2) {
    return num1 + num2
}
let result1 = addNumber(2,3)
console.log(result1); 


//Arrow expretions
let addNum = (num) => 2*num

let result = addNum(2)
console.log(result);