function printntNthElement(arrayOFString) {
 
    let lastIndex = arrayOFString.length - 1;
    let lastElement = Number(arrayOFString[lastIndex]);
    let newArray = [];
    

   for (let i = 0; i < arrayOFString.length - 1; i += lastElement) {
    
        let currentElement = arrayOFString[i];
        newArray.push(currentElement)
    } 

    console.log(newArray.join(' '));
}
printntNthElement(['dsa', 'asd', 'test', 'test', '2'])