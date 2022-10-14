function simpleCalculation(numOne, numTwo, operator) {

    let result = 0;

    switch (operator) {
        case 'multiply':
            result = numOne * numTwo
            break;
        case 'divide':
            result = numOne / numTwo
            break;
        case 'add':
            result = numOne + numTwo
            break;
        default:
            result = numOne - numTwo
            break;
    }

         return result
}

let finalResult = simpleCalculation(12, 19, 'add')
console.log (finalResult);

    



