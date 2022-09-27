function sumDigits(number) {
    let numberOfString = number.toString()
    let sumOfDigits = 0;
    let numberOfDigits = numberOfString.length;

    for (let index = 0; index < numberOfDigits; index++) {

        let currentDigit = Number(numberOfString[index]);
        sumOfDigits += currentDigit
    }

    console.log(sumOfDigits);
}
sumDigits(245678)