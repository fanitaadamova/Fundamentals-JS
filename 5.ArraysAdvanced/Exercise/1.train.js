function train(arr) {

    let passengersInTrain = arr.shift().split(' ').map(Number);
    let count = arr.shift();

    for (let index = 0; index < arr.length; index++) {

        let command = arr[index].split(' ')

        if (command[0] === "Add") {
            let wagon = command[1];
            passengersInTrain.push(wagon);
        } else {
            let addPassenger = Number(command[0]);

            for (let j = 0; j < passengersInTrain.length; j++) {
                let com = Number(passengersInTrain[j])
                if ((com + addPassenger) <= count) {
                    passengersInTrain.splice(j, 1, (com + addPassenger))
                    break;
                }
            }
        }
    }

    console.log(passengersInTrain.join(` `));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)