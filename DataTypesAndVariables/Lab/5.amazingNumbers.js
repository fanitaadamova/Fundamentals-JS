function amazingNumbers(number) {

    let command = number.toString();
    let sum = 0;

    for (let i = 0; i < command.length; i++) {
        let currentNumber = Number(command[i]);
        sum += currentNumber;
    }

    let result = sum.toString();
    let isAmazing = false;
    let amazing = ""

    for (let j = 0; j < result.length; j++) {
        let currentNumber = Number(result[j]);
        if (currentNumber === 9) {
            isAmazing = true;
            break;
        }
    }
    if (isAmazing) {
        amazing = "True";
    } else {
        amazing = "False";
    }

    console.log(`${number} Amazing? ${amazing}`);
}
amazingNumbers(1233)