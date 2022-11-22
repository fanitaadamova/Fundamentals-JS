function worldTour(array) {

    let stops = array.shift();
    let string = array.shift();

    while (string !== 'Travel') {

        let arrayOfString = string.split(':');
        let command = arrayOfString.shift();

        if (command === 'Add Stop') {
            let index = arrayOfString[0];
            let manipulatingString = arrayOfString[1];

            if (stops[index]) {

                let firstPart = stops.substring(0, index);
                firstPart += manipulatingString;
                let secondPart = stops.substring(index);
                firstPart += secondPart;
                stops = firstPart;
            }

            console.log(stops);
        }

        if (command === 'Remove Stop') {
            let startIndex = Number(arrayOfString[0]);
            let endIndex = Number(arrayOfString[1]);

            if (stops[startIndex] && stops[endIndex]) {
                let firstPartOfStops = stops.substring(0, startIndex);
                ///така премахвам от startIndex до endIndex
                let secondPartOfStops = stops.substring(endIndex + 1);

                stops = firstPartOfStops + secondPartOfStops;
            }

            console.log(stops);
        }

        if (command === 'Switch') {
            let oldPartOfString = arrayOfString[0];
            let newPartOfString = arrayOfString[1];

            if (stops.includes(oldPartOfString)) {
                let replacement = stops.replace(oldPartOfString, newPartOfString);
                stops = replacement;

            }
            console.log(stops);
        }
        string = array.shift();
    }


    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
worldTour(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])
