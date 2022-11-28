function pirates(array) {

    let line = array.shift();
    let result = [];
    let cityCount = 0;
    let cities = {};

    while (line !== 'Sail') {

        let lineArr = line.split('||');

        let cityName = lineArr[0];
        let population = Number(lineArr[1]);
        let gold = Number(lineArr[2]);

        if (!cities.hasOwnProperty(cityName)) {
            cities[cityName] = [population, gold]
        } else {
            tempValues = cities[cityName];
            population += Number(tempValues[0]);
            gold += Number(tempValues[1]);

            cities[cityName] = [population, gold]
        }

        line = array.shift();
    }


    while (line !== 'End') {

        let lineArr = line.split('=>');
        let command = lineArr[0];
        let town = lineArr[1];

        switch (command) {
            case 'Plunder':
                let people = Number(lineArr[2]);
                let gold = Number(lineArr[3]);

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (cities.hasOwnProperty(town)) {
                    tempValues = cities[town];
                    people = Number(tempValues[0]) - people
                    gold = Number(tempValues[1]) - gold


                    if (people <= 0 || gold <= 0) {
                        delete cities[town]
                        console.log(`${town} has been wiped off the map!`);
                    } else {
                        cities[town] = [people, gold];
                    }
                }
                break;
            case 'Prosper':
                let treasure = Number(lineArr[2]);

                if (treasure < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    if (cities.hasOwnProperty(town)) {
                        tempValues = cities[town];
                        let people = Number(tempValues[0]);
                        let gold = Number(tempValues[1])

                        gold = gold + treasure;

                        cities[town] = [people, gold];

                        console.log(`${treasure} gold added to the city treasury. ${town} now has ${gold} gold.`);

                    }
                }
                break;
        }
        line = array.shift();
    }

    for (const city in cities) {
        cityCount++;
        let [people, gold] = cities[city]
        result.push(`${city} -> Population: ${people} citizens, Gold: ${gold} kg`)

    }

    if (cityCount === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`);
        console.log(result.join('\n'));

    }

}
pirates(['Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'])