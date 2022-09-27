function sumOfOddNumbers(number) {
    let counter = 0;
    let currentNumber = 1;
    let sum = 0;

    while (counter != number) {
        if (currentNumber % 2 != 0) {
            counter++;
            console.log(currentNumber);
            sum += currentNumber
        }
        currentNumber++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(3)