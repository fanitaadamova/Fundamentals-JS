function triplesOfLatinLetters(stringOfNumber) {

    let n = Number(stringOfNumber)

    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(97 + i);

        for (let j = 0; j < n; j++) {
            let letter2 = String.fromCharCode(97 + j);

            for (let k = 0; k < n; k++) {

                let letter3 = String.fromCharCode(97 + k)

                console.log(letter1 + letter2 + letter3);

            }
        }
    }
}
triplesOfLatinLetters('2')