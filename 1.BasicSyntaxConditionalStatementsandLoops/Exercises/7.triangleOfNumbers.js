function triangleOfNumbers(number) {
    
    for (let i = 1; i <= number; i++) {
        let buffer = ''
        for (let j = 1; j <= i; j++) {
            buffer += `${i} `
        }
        console.log(buffer);
    }
}
triangleOfNumbers(5)