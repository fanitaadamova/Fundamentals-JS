
function palindromeIntegers(numberArray) {

    let numberArrayLength = numberArray.length;
    for (let index = 0; index < numberArrayLength; index++) {
// give elements of array and meka a String
        let numberAsString = numberArray[index].toString();
    
// After that split (divide index of String and maka array)
// reverse - (this method is used only by Strings) - reversed array and join 
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123, 323, 421, 121])