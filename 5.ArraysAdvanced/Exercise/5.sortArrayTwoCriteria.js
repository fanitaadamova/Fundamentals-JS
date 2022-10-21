function sortArray2Criteria(arr) {
//function that orders an array of strings, by their length in ascending order as primary criteria,
// and by alphabetical value in ascending order as second criteria

    let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sortedArr.join(`\n`));
}
sortArray2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])