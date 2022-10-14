function printAndSum(startNumber, endNumber) {

    let buffer = ``;
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
        buffer += `${i} `
    }
    console.log(buffer);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)