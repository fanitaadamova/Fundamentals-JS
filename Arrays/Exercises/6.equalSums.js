function equalSums(arrayOfNumber) {

    let isFoundIndex = 'no'

    for (let i = 0; i < arrayOfNumber.length; i++) {
        let sumR = 0;
        let sumL = 0;
        let currentNumber = arrayOfNumber[i];  //3
        //calc left sum
        for (let l = 0; l < i; l++) {   // i= 2
            sumL += arrayOfNumber[l]
        }
        //calc right sum
        for (let r = i + 1; r < arrayOfNumber.length; r++) {   // i=2
            sumR += arrayOfNumber[r]  //3
        }

        if (sumR === sumL) {
            isFoundIndex = i
        }
    }

    console.log(isFoundIndex);
}
equalSums([1, 2, 3, 3])