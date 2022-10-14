function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let sumOfDigits = 0
        let command = i.toString();

        for (let index = 0; index < command.length; index++) {
            let currentNumber = Number(command[index]);
            sumOfDigits += currentNumber;
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(15)