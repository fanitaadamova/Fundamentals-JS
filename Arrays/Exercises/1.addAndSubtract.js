function addAndSubtract(array) {

    let newArray = [];
    let sumArray = 0;
    let sumNewArray = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i] + i)
        } else {
            newArray.push(array[i] - i)
        }
    }

    for (num of array) {
        sumArray += num;
    }

    for (num of newArray) {
        sumNewArray += num;
    }
    console.log(newArray);
    console.log(sumArray);
    console.log(sumNewArray);
}
addAndSubtract([5, 15, 23, 56, 35])