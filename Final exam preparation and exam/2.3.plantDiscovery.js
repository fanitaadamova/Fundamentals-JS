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
        let currentPlantInfo = lineArr[1];
        //stignah do tik

        if (command === 'Rate') {
            let arr = currentPlantInfo.split(' - ')
            let plant = arr[0];
            let rating = arr[1];

            if (objectOfPlants.hasOwnProperty(plant)) {

                let currentValueArr = objectOfPlants[plant]
                currentValueArr.push(rating);
                objectOfPlants[plant] = currentValueArr;

            } else {
                console.log(`error`);
            }
        }

        if (command === 'Update') {

            let arr = currentPlantInfo.split(' - ')
            let plant = arr[0];
            let newRarity = arr[1];

            if (objectOfPlants.hasOwnProperty(plant)) {

                let currentValueArr = objectOfPlants[plant]
                //така заменям нулевия елемент на масива
                currentValueArr.shift();
                currentValueArr.unshift(newRarity)
                objectOfPlants[plant] = currentValueArr;

            } else {
                console.log(`error`);
            }
        }

        if (command === 'Reset') {
            let plant = currentPlantInfo;

            if (objectOfPlants.hasOwnProperty(plant)) {
                let currentValueArr = objectOfPlants[plant]
                currentValueArr.splice(1);

                objectOfPlants[plant] = currentValueArr;
            } else {
                console.log(`error`);
            }
        }

        currentString = array.shift();
    }

    console.log(`Plants for the exhibition:`);

    for (const plant in objectOfPlants) {
        let arrOfPlantsInfo = objectOfPlants[plant];
        let rarity = arrOfPlantsInfo.shift();
        let sumOfRating = 0;
        let avgRating = 0;

        let length = arrOfPlantsInfo.length;

        if (length > 0) {
            for (let element of arrOfPlantsInfo) {
                sumOfRating += Number(element);
            }

            avgRating = sumOfRating / length
        }

        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
    }

}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
