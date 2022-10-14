function matrix(number) {
    let array = [];

    for (let i = 0; i < number; i++) {
        array.push(number);
    }

    for (let j = 0; j < number; j++) {
        console.log(array.join(` `));
    }
    
}
matrix(3)