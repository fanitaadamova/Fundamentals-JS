function deckOfCards(array) {

    let listOfCards = array.shift().split(", ");
    let n = Number(array.shift())



    for (let index = 0; index < n; index++) {
        let currentElement = array[index].split(", ");
        let command = currentElement[0];

        if (command === "Add") {
            let cardName = currentElement[1];
            if (listOfCards.includes(cardName)) {
                console.log(`Card is already in the deck`);
            } else {
                listOfCards.push(cardName);
                console.log(`Card successfully added`);
            }

        }

        if (command === "Remove") {
            let cardName = currentElement[1];
            if (listOfCards.includes(cardName)) {
                let cardIndex = listOfCards.indexOf(cardName);
                listOfCards.splice(cardIndex, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Card not found`);
            }
        }

        if (command === "Remove At") {
            let indexOfCard = Number(currentElement[1]);

            if (indexOfCard >= 0 && indexOfCard < listOfCards.length) {
                listOfCards.splice(indexOfCard, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Index out of range`);
            }

        }

        if (command === "Insert") {
            let indexOfCard = Number(currentElement[1]);
            let nameOfCard = currentElement[2];

            if (listOfCards.includes(nameOfCard) && indexOfCard >= 0 && indexOfCard < listOfCards.length) {
                console.log(`Card is already added`);
            } else if (indexOfCard < 0 || indexOfCard >= listOfCards.length) {
                console.log(`Index out of range`);
            } else if ((!listOfCards.includes(nameOfCard)) && indexOfCard >= 0 && indexOfCard < listOfCards.length) {
                listOfCards.splice(indexOfCard, 0, nameOfCard);
                console.log(`Card successfully added`);
            }
        }

    }

    console.log(listOfCards.join(`, `));

}
deckOfCards(['Ace of Diamonds, Queen of Hearts, King of Clubs',
    '3',
    'Add, King of Diamonds', 'Insert, 2, Jack of Spades', 'Remove, Ace of Diamonds'])