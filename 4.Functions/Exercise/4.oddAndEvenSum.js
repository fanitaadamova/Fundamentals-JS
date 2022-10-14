function oddAndEvenSum(number) {
    
    let numberAsString = number.toString()
    let lengthString = numberAsString.length
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < lengthString; index++) {
        let currentNumber = Number(numberAsString[index])

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)