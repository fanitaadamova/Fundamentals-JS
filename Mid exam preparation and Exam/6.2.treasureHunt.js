function treasureHunt(array) {

    let treasureArray = array
        .shift()
        .split("|")

    let index = 0;
    let command = array[index]

    while (command !== "Yohoho!") {

        let commandArr = command.split(" ")
        let operation = commandArr[0];

        if (operation === "Loot") {

            for (let i = 1; i < commandArr.length; i++) {
                let element = commandArr[i];

                if (!treasureArray.includes(element)) {
                    treasureArray.unshift(element)
                }
            }
        }

        if (operation === "Drop") {
            let j = Number(commandArr[1]);

            if (j >= 0 && j <= treasureArray.length - 1) {
                let newElement = treasureArray.splice(j, 1);
                treasureArray.push(newElement)
            }
        }

        if (operation === "Steal") {
            //Да внимавам с тази проверка, така отрязвам последните L elementa от масива, ако няма L, ортязвам, колкото има
            let index = Number(commandArr[1]);
            let stealedTresure = treasureArray.slice(-index);
            treasureArray.splice(-index);
            console.log(stealedTresure.join(', '));

        }

        index++;
        command = array[index];
    }

    let length = treasureArray.length;

    if (length > 0) {
        let sum = 0;

        for (let k = 0; k < length; k++) {
            sum += treasureArray[k].length;
        }
        let averageGain = sum / length
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
    else  {
        console.log(`Failed treasure hunt.`);
    }

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])

