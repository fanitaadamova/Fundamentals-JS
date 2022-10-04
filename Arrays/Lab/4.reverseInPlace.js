function reverseInPlace(array) {

    for (let i = 0; i < array.length / 2; i++) {
        let tempElement = array[i];             // define 0 element // define 1 element

        array[i] = array[array.length - 1 - i]   // 0 element get amount of 4 element //1 get 3
        array[array.length - 1 - i] = tempElement  // 4 element get amount of 0 // 3 get 1

    }
    console.log(array.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])