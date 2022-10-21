function listOfProducts(array) {

    let sortedArr = array.sort();

    for (let index = 0; index < sortedArr.length; index++) {

        console.log(`${index + 1}.${sortedArr[index]}`);
    }

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])