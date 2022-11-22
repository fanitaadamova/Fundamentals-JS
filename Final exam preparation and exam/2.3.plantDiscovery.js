function plantDiscovery(array) {

    let numberOfPlants = array.shift();
    let objectOfPlants = {};

    for (let index = 0; index < numberOfPlants; index++) {

        let lineArr = array.shift().split('<->')
        let currentPlant = lineArr.shift();
        let rarity = lineArr.shift();

        objectOfPlants[currentPlant] = [rarity];
    }
// objectOfPlants - двойки key и value масив
    let currentString = array.shift();

    while (currentString !== 'Exhibition') {

        let lineArr = currentString.split(': ');
        let command = lineArr[0];
        let currentPlant = lineArr[1];


         if (command === 'Rate') {
             
         }

         if (command === 'Update') {
             
        }

        if (command === 'Reset') {
             
        }

        console.log(command);
        console.log(currentPlant);
        


        currentString = array.shift();
    }

    console.log(objectOfPlants);
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)