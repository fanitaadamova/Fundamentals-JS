function reverseArrayOfNumbers(count, numbers) {
    let reverse = []

    for (let i = count - 1; i >= 0; i--) {
        reverse.push(numbers[i]);
    }
    console.log(reverse.join(` `));
}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50])