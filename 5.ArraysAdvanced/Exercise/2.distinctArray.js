function distinctArray(array) {
    
    let uniqueNumbersArray = [];


    for (let index = 0; index < array.length; index++) {
        let  currentElement = array[index];

        if (!uniqueNumbersArray.includes(currentElement)) {
            uniqueNumbersArray.push(currentElement)
        }
    }

    console.log(uniqueNumbersArray.join(" "));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])