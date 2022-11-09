function movingTarget(array) {

    let targets = array[0]
        .split(` `)
        .map(x => Number(x))

    let index = 1;
    let command = array[index];


    while (command !== "End") {
        let commandArr = command.split(` `);
        let manipulating = commandArr[0];
        let manipulateIndex = Number(commandArr[1]);
        let power = Number(commandArr[2]);

        if (manipulating === "Shoot") {

            if (targets[manipulateIndex]) {
                targets[manipulateIndex] -= power
                if (targets[manipulateIndex] <= 0) {
                    targets.splice(manipulateIndex, 1)
                }
            }
        }

        if (manipulating === "Add") {
            //така оказваме, ако има елементи в масива, т.е да не е празен
            if (targets[manipulateIndex]) {
                //така заместваме стойност в масив
                targets.splice(manipulateIndex, 0, power)
            } else {
                console.log(`Invalid placement!`);
            }

        }

        if (manipulating === "Strike") {
            let radius = power;
            let lowerIndex = manipulateIndex - radius;
            let upperIndex = manipulateIndex + radius;
            //така оказваме, ако има такъв валиден индекс
            if (targets[lowerIndex] && targets[upperIndex]) {
                targets.splice(lowerIndex, radius * 2 + 1)
            } else {
                console.log(`Strike missed!`);
            }
        }

        index++;
        command = array[index];
    }

    console.log(targets.join(`|`));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
