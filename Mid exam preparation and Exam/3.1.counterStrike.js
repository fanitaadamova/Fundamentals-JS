function counterStrike(array) {

    let initialEnergy = array.shift();
    let index = 0;
    let command = array[index];
    let counterStrike = 0;
    let notEnoughEnergy = false;

    while (command !== "End of battle") {

        if (initialEnergy - Number(command) < 0) {
            notEnoughEnergy = true;
            break;
        }
        counterStrike++;
        initialEnergy -= Number(command);

        if (counterStrike % 3 === 0) {
            initialEnergy += counterStrike
        }


        index++;
        command = array[index];
    }

    if (notEnoughEnergy) {
        console.log(`Not enough energy! Game ends with ${counterStrike} won battles and ${initialEnergy} energy`);
    } else {
        console.log(`Won battles: ${counterStrike}. Energy left: ${initialEnergy}`);
    }

}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

