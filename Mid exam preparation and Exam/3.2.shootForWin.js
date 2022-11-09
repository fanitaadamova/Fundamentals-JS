function shootForWin(array) {

    let shootArray = array
        .shift()
        .split(" ")
        .map(x => Number(x))

    let index = 0;
    let command = array[index];
    let counterStrike = 0;


    while (command !== "End") {
        let manipIndex = Number(command);

        if (manipIndex >= 0 && manipIndex <= shootArray.length - 1 && shootArray[manipIndex] !== -1) {

            let numOfReduce = shootArray[manipIndex];
            shootArray[manipIndex] = -1;

            for (let i = 0; i < shootArray.length; i++) {
                if (shootArray[i] > numOfReduce && shootArray[i] !== -1) {
                    shootArray[i] = shootArray[i] - numOfReduce;
                } else if (shootArray[i] <= numOfReduce && shootArray[i] !== -1) {
                    shootArray[i] = shootArray[i] + numOfReduce;
                }
            }
        }

        index++;
        command = array[index];
    }

    for (const num of shootArray) {
        if (num === -1) {
            counterStrike++;
        }
    }

    console.log(`Shot targets: ${counterStrike} -> ${shootArray.join(` `)}`);
}
shootForWin(["30 30 12 60 54 66",
    "58",
    "20",
    "45",
    "7",
    "End"])

