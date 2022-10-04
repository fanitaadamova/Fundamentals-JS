function magicSum(array, sum) {

    for (let i = 0; i < array.length; i++) {

        let currentSum = 0
        let currentNumber = array[i]

        for (let j = i + 1; j < array.length; j++) {
            currentSum = currentNumber + array[j]
            if (currentSum === sum) {
                console.log(`${currentNumber} ${array[j]}`);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],27)
