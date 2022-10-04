function maxSequenceOfEqualElements(array) {
    let resultArray = [];
    let maxCounter = 0;

    for (let i = 0; i < array.length; i++) {
        let currentArray = [];
        let currentCounter = 0;

        for (let j = i; j < array.length; j++) {

            if (array[i] === array[j]) {
                currentCounter++;
                // push next element in current array
                currentArray.push(array[j])
            } else {
                break;
            }
        }
        if (currentCounter > maxCounter) {
            maxCounter = currentCounter
            resultArray = currentArray
        }
    }
    console.log(resultArray.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])