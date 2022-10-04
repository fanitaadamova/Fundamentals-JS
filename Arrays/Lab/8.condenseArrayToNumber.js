function condenseArrayToNumber(numbers) {
    /* let result = [];
     for (let num of numbers) {
         result.push(num);
         }
     */
    let result = numbers;

    while (result.length > 1) {
        let currentArray = [];

        for (let i = 0; i < result.length - 1; i++) {
            currentArray[i] = result[i] + result[i + 1];
        }
        result = currentArray;
    }
    
    console.log(result.join());
}
condenseArrayToNumber([2, 10, 3, 6, 7, 6, 8, 9])