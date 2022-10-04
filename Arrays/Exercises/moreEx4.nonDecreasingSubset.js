function nonDecreasingSubset(array) {

    let nonDecrArray = [];
    let biggerNumber = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < array.length; index++) {

        let currentNumber = array[index];

        if (currentNumber >= biggerNumber) {
            biggerNumber = currentNumber;

            nonDecrArray.push(biggerNumber)
        }

    }

        console.log(nonDecrArray.join(` `));
    
}
nonDecreasingSubset([1, 2, 3, 4])