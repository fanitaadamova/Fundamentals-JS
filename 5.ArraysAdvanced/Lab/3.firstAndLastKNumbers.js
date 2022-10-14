function firstAndLastKNumbers(arrayOfNumbers) {

    let count = arrayOfNumbers.shift()
    let firstElement = arrayOfNumbers.slice(0, count);
    let lastElements = arrayOfNumbers.slice(arrayOfNumbers.length - count);

    console.log(firstElement.join(" "));
    console.log(lastElements.join(" "));
    
}
firstAndLastKNumbers([2, 7, 8, 9])