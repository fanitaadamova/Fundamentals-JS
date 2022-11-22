function destinationMapper(input) {

    let text = input;
    let arrayOfDestinations = [];
    let travelPoints = 0;
    let pattern = /([=/])(?<location>[A-Z][A-Za-z]{2,})\1/g;
    /*A valid location is:
         •	Surrounded by "=" or "/" on both sides (the first and the last symbols must match)
         •	After the first "=" or "/" there should be only letters (the first must be upper-case other         letters could be upper or lower-case)
         •	The letters must be at least 3
    */


    let destination = pattern.exec(text);

    while (destination) {
        arrayOfDestinations.push(destination.groups['location']);
        destination = pattern.exec(text);
    }

    for (const destination of arrayOfDestinations) {
        let lenghtOfDestination = Number(destination.length);
        travelPoints += lenghtOfDestination;
    }

    let allDestinations = arrayOfDestinations.join(', ');

    console.log(`Destinations: ${allDestinations}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")