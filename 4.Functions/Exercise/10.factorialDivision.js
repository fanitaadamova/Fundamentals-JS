function factorialDivision(firstNum, secondNum) {

    return console.log((factorial(firstNum) / factorial(secondNum)).toFixed(2));

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
   

}
factorialDivision(5, 2)