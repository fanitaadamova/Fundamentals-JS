function needForSpeed(input) {

    let array = input.slice();
    let numberOfCars = Number(array.shift());
    let carsInfo = {};

    let countCars = 0

    while (countCars < numberOfCars) {
        countCars++;
        let currentLine = array.shift().split('|');
        let carName = currentLine[0];
        let mileage = Number(currentLine[1]);
        let fuelAvailable = Number(currentLine[2]);

        if (!carsInfo.hasOwnProperty(carName)) {
            carsInfo[carName] = [mileage, fuelAvailable]
        }

    }

    let line = array.shift();

    while (line !== 'Stop') {
        let currentLine = line.split(' : ');
        let command = currentLine.shift();
        let carName = currentLine[0];

        switch (command) {
            case 'Drive':
                let distance = Number(currentLine[1]);
                let needFuel = Number(currentLine[2]);

                if (carsInfo.hasOwnProperty(carName)) {
                    let [mileage, fuelAvailable] = carsInfo[carName];
                    mileage = Number(mileage);
                    fuelAvailable = Number(fuelAvailable);
                    //console.log(fuelAvailable);
                    //console.log(needFuel);

                    if (fuelAvailable < needFuel) {
                        console.log(`Not enough fuel to make that ride`);
                    } else if (mileage < 100000) {
                        fuelAvailable -= needFuel;
                        mileage += distance;
                        carsInfo[carName] = [mileage, fuelAvailable]
                        console.log(`${carName} driven for ${distance} kilometers. ${needFuel} liters of fuel consumed.`);

                    }

                    if (mileage >= 100000) {
                        console.log(`Time to sell the ${carName}!`);
                        delete carsInfo[carName];
                    }
                }
                break;
            case 'Refuel':
                let fuelOfRefuel = Number(currentLine[1]);
                let [mileage, fuelAvailable] = carsInfo[carName];
                mileage = Number(mileage);
                fuelAvailable = Number(fuelAvailable);
                let initialAvailavleFuel = fuelAvailable;
                fuelAvailable += fuelOfRefuel;

                if (fuelAvailable > 75) {
                    console.log(`${carName} refueled with ${75 - initialAvailavleFuel} liters`);
                    fuelAvailable = 75;
                } else {
                    console.log(`${carName} refueled with ${fuelOfRefuel} liters`);
                }

                carsInfo[carName] = [mileage, fuelAvailable];
                break;

            case 'Revert':
                let revertedKilomiters = Number(currentLine[1]);
                let [currentMileage, currentFuel] = carsInfo[carName];
                currentMileage = Number(currentMileage);
                currentFuel = Number(currentFuel);

                currentMileage -= revertedKilomiters;

                if (currentMileage < 10000) {
                    currentMileage = 10000
                } else {
                    console.log(`${carName} mileage decreased by ${revertedKilomiters} kilometers`);
                }

                carsInfo[carName] = [currentMileage, currentFuel];
                break;
        }

        line = array.shift();
    }

    for (const carName in carsInfo) {
        let [mileage, fuel] = carsInfo[carName];
        console.log(`${carName} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }



}
needForSpeed(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])