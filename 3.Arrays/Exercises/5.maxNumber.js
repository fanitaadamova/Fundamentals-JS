function maxNumber(array) {

    let resultArray = []

    for (let i = 0; i < array.length; i++) {

        let isBigger = true
        let currentNumber = array[i]

        for (let k = i + 1; k < array.length; k++) {
            if (currentNumber <= array[k]) {
                isBigger = false
            }
        }

        if (isBigger) {
            resultArray.push(array[i])
        }
    }
    console.log(resultArray.join(` `));
}
maxNumber([14, 24, 3, 19, 15, 17])