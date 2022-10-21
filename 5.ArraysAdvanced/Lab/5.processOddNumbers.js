function processOddNumbers(arrayOfNumbers) {
    //method chaining- when use more than one method writted bellow
    let oddPositions = arrayOfNumbers
        .filter((num, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse();

    console.log(oddPositions.join(" "));

}
processOddNumbers([10, 15, 20, 25])