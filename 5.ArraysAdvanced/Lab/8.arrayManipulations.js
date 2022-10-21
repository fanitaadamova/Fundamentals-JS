function arrayManipulations(arr) {

    let arrayOfNumbers = arr.shift().split(' ').map(Number)

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i].split(' ');

        //  console.log(command);
        let operation = command[0];
        let num = Number(command[1]);

        if (operation === 'Add') {
            arrayOfNumbers.push(num);
        }
        if (operation === 'Remove') {
            arrayOfNumbers = arrayOfNumbers.filter(el => el !== num)
        }
        if (operation === 'RemoveAt') {
            arrayOfNumbers.splice(num, 1)
        }
        if (operation === 'Insert') {
            let numIns = Number(command[2])
            arrayOfNumbers.splice(numIns, 0, num)
        }

    }

    console.log(arrayOfNumbers.join(" "));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)
