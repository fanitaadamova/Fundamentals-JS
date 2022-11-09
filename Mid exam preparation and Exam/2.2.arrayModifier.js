function arrayModifier(array) {

    let arrOfNumber = array[0].split(` `);
    let index = 1;
    let command = array[index];

    while (command !== "end") {

        let comArr = command.split(` `);

        if (comArr[0] === "swap") {
            let index1 = comArr[1];
            let index2 = comArr[2];
            let currentIndexNum = arrOfNumber[index1];
            arrOfNumber[index1] = arrOfNumber[index2];
            arrOfNumber[index2] = currentIndexNum;
        }

        if (comArr[0] === "multiply") {
            let index1 = comArr[1];
            let index2 = comArr[2];
            let multiplyNum = arrOfNumber[index1] * arrOfNumber[index2];
            arrOfNumber[index1] = multiplyNum;
        }

        if (comArr[0] === "decrease") {

            arrOfNumber = arrOfNumber.map(a => a - 1);
        }
        index++;
        command = array[index];
    }

    console.log(arrOfNumber.join(`, `));

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])