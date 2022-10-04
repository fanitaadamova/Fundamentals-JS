function evenAndOddSubtraction(array) {
    /*Write a program that calculates the difference between the 
    sum of the even and the sum of the odd numbers in an array.*/
    let sum = 0;
    for (let num of array) {

        if (num % 2 == 0) {
            sum += num;
        } else {
            sum -= num;
        }
    }
    console.log(sum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
