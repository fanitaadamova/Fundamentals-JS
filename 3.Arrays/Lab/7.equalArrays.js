function equalArrays(array1, array2) {
    let isEqual = true;
    let sum = 0;

    for (let index = 0; index < array1.length; index++) {
        array1[index] = Number(array1[index]);
        sum += array1[index];
    }

    for (let index = 0; index < array2.length; index++) {
        array2[index] = Number(array2[index])
        if (array1[index] === array2[index]) {
            isEqual = true
        } else {
            isEqual = false;
        }
    }

    for (let index = 0; index < array1.length; index++) {
        if (array1[index] !== array2[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])