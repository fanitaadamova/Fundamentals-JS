function smallestTwoNumbers(arrayOfNumbers) {

    let sortedArr = arrayOfNumbers
        .sort((a, b) => a - b)
        .slice(0, 2);

    console.log(sortedArr.join(" "));

}
smallestTwoNumbers([30, 15, 50, 5])