function negativeOrPositiveNumbers(array) {
    let numbers = []

    for (let index = 0; index < array.length; index++) {
        let currentElement = Number(array[index]);

        if (currentElement < 0) {
            numbers.unshift(currentElement);
        } else {
            numbers.push(currentElement)
        }
    }

    for (let j = 0; j < numbers.length; j++) {
        console.log(numbers[j]);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])