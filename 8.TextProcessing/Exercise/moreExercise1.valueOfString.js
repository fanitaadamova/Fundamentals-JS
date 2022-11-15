function valueOfString(array) {
    let string = array[0].split('');
    let command = array[1];
    let sumUpper = 0;
    let sumLowwer = 0;
    let isUpperCase = false;

    for (const char of string) {
        if (command === 'UPPERCASE') {
            isUpperCase = true;
            if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
                sumUpper += char.charCodeAt()
            }
        } else if (command === 'LOWERCASE') {
            //lower case
            if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                sumLowwer += char.charCodeAt()
            }
        }
    }

    if (isUpperCase) {
        console.log(`The total sum is: ${sumUpper}`);
    } else {
        console.log(`The total sum is: ${sumLowwer}`);
    }


}
valueOfString(['AC/DC',
    'UPPERCASE'])