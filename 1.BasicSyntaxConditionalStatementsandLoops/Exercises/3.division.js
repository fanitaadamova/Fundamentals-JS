function division(number) {

    let currentNumber = number;

    if (currentNumber % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (currentNumber % 7 === 0) {
        console.log(`The number is divisible by 7`);
    } else if (currentNumber % 6 === 0) {
        console.log(`The number is divisible by 6`);
    } else if (currentNumber % 3 === 0) {
        console.log(`The number is divisible by 3`);
    } else if (currentNumber % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }
}
division(30)