function arrayRotation(arrayToRotate, rotations) {
    // Note: Depending on the number of rotations, the first element goes to the end.
    // arrayToRotate.shift() - remove first element of array
    for (let index = 0; index < rotations; index++) {
        let numberToMove = arrayToRotate.shift();
        arrayToRotate.push(numberToMove);
    }
    console.log(arrayToRotate.join(` `));
}
arrayRotation([51, 47, 32, 61, 21], 2) 