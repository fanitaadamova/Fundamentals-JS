function carWash(array) {

    let precentage = 0;

    for (let index = 0; index < array.length; index++) {
        let command = array[index];

        switch (command) {
            case "soap":
                precentage += 10;
                break;
            case "water":
                precentage += precentage * 0.20;
                break;
            case "vacuum cleaner":
                precentage += precentage * 0.25;
                break;
            case "mud":
                precentage -= precentage * 0.10;
                break;
        }
    }
    
    return console.log(`The car is ${precentage.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
