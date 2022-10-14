function biggestOf3Numbers(num1, num2, num3) {
    let biggestNumber = 0;

    if (num1 > num2 && num1 > num3) {
        biggestNumber = num1;
    }
    if (num2 > num1 && num2 > num3) {
        biggestNumber = num2;
    }
    if (num3 > num1 && num3 > num2) {
        biggestNumber = num3
    }
    if (num3 === num1 || num3 === num2) {
        biggestNumber = num3
    }
    if (num2 === num1) {
        biggestNumber = num2
    }

    console.log(`${biggestNumber}`);
}

biggestOf3Numbers(2, 2, 2)