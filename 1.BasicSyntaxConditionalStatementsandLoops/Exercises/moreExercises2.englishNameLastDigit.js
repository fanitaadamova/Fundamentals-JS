function englishNameLastDigit(input) {

    let number = input[0];
    let lastDigit = Number(number[number.length - 1]);
    let englishNameLastDigit = ""

    switch (lastDigit) {
        case 0:
            englishNameLastDigit = "zero"
            break;
        case 1:
            englishNameLastDigit = "one"
            break;
        case 2:
            englishNameLastDigit = "two"
            break;
        case 3:
            englishNameLastDigit = "three"
            break;
        case 4:
            englishNameLastDigit = "four"
            break;
        case 5:
            englishNameLastDigit = "five"
            break;
        case 6:
            englishNameLastDigit = "six"
            break;
        case 7:
            englishNameLastDigit = "seven"
            break;
        case 8:
            englishNameLastDigit = "eight"
            break;
        case 9:
            englishNameLastDigit = "nine"
            break;
    }
    console.log(englishNameLastDigit);
}
englishNameLastDigit(["124560985"])