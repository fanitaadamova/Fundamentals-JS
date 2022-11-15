//You are given a positive integer number and one binary digit B (0 or 1). 
//Your task is to write a program that finds the number of binary digits (B) in a given integer.


function count(number, zeroOrOne) {
    let counter = 0;

    while (number > 0) {
        let leftOver = number % 2

        if (leftOver === zeroOrOne) {
            counter++;
        }
        number = Math.floor (number/2)
    }

    console.log(counter);
}
count(20, 0)