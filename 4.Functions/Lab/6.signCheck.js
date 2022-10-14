function signCheck(numOne, numTwo, numThree) {

    let finalResult = ""

    function firstCheck(numOne, numTwo) {
        let isNegative = true
        if (numOne > 0 && numTwo > 0) {
            isNegative = false
        } else if (numOne < 0 && numTwo < 0) {
            isNegative = false
        }
        return isNegative;
    }

    let relultFirstChec = firstCheck(numOne, numTwo)

    if (relultFirstChec === false && numThree > 0) {
        finalResult = "Positive"
    } else if (relultFirstChec === true && numThree < 0) {
        finalResult = "Positive"
    } else {
        finalResult = "Negative"
    }
    
    console.log(finalResult);
}
signCheck(-5, -12, -15)

