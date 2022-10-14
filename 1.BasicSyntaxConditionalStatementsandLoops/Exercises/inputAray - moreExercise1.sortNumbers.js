function sortNumbers(input) {
    let currentNumber = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let middleNumber = 0;

    for (let index = 0; index <= 2; index++) {
        currentNumber = Number(input[index])
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
    }

    for (let index = 0; index <= 2; index++) {
        currentNumber = Number(input[index])
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }

    for (let index = 0; index <= 2; index++) {
        currentNumber = Number(input[index])
        if ((currentNumber < maxNumber) && (currentNumber > minNumber)) {
            middleNumber = currentNumber;
        }
    }

    console.log(`${maxNumber}`);
    console.log(`${middleNumber}`);
    console.log(`${minNumber}`);

}
sortNumbers([0, 2, 0])
