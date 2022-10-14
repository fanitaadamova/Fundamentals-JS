function subtract(numOne,numTwo,numThree) {
/* function sumOfTwoNum(numOne,numTwo) {
       return numOne + numTwo;
   }
   let result = sumOfTwoNum(numOne,numTwo)

   return result - numThree  */

let sum = (numOne,numTwo) => numOne + numTwo;
let result = sum(numOne,numTwo);

return result - numThree

}
let finalResult = subtract(42,58,100)
console.log(finalResult);