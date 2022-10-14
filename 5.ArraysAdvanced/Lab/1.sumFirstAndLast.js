function sumFirstAndLast(numbers) {

    let firstElements = Number(numbers[0]);
    let lastElements = Number(numbers.pop());
    let sum = firstElements + lastElements;

    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])