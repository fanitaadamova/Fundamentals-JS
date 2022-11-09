function garage(input) {
    let garages = {};
    for (const line of input) {
        let [numOfGarage, carInfo] = line.split(' - ');
        if (!garages.hasOwnProperty(numOfGarage)) {
            garages[numOfGarage] = [];
        }
        garages[numOfGarage].push(carInfo);
    }

    let result = '';
    //така превръщам обекта в масив, за да мога да го сортирам
    Object.entries(garages).sort((a, b) => a[0] - b[0]).forEach(([garage, cars]) => {
        result += `Garage № ${garage}\n`;
        //cars is array
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
            result += `--- ${currCar}\n`;
        }
    });
    console.log(result);
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])