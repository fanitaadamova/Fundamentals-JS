function piccolo(array) {

    let parkingList = new Map();

    array.forEach(element => {
        let [command, numberOfCar] = element.split(", ");

        if (command === "IN") {
            parkingList.set(numberOfCar, command);
        } else {
            parkingList.delete(numberOfCar);
        }
    });

    let parkingListEntries = Array.from(parkingList.entries()).sort((a, b) => a[0].localeCompare(b[0]));
     
    if (parkingListEntries.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (const [numberOfCar, command] of parkingListEntries) {
            console.log(numberOfCar);
        }
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
