function cardGame(array) {

    let cardHand = {};

    array.forEach(element => {
        let elementArr = element.split(": ")
        let name = elementArr[0];
        let cardsString = elementArr[1];
        let currentCardsArr = cardsString.split(", ");

        if (!cardHand.hasOwnProperty(name)) {
            cardHand[name] = [];
        }

        for (let i = 0; i < currentCardsArr.length; i++) {
            let currentCard = currentCardsArr[i];
            if (!(cardHand[name]).includes(currentCard)) {
                cardHand[name].push(currentCard);
            }
        }

    });


    for (const key in cardHand) {

        let uniqueCards = cardHand[key];
        let totalScore = 0;

        for (let index = 0; index < uniqueCards.length; index++) {
            // taking a current card and calcilating value
            let currentCard = uniqueCards[index];
            let cardPower = 0;
            let cardType = 0;
            // cheching length of string , if there is no index 2
            if (!currentCard[2]) {
                cardPower = currentCard[0];
                cardType = currentCard[1];
                switch (cardPower) {
                    case '1':
                        cardPower = 1;
                        break;
                    case '2':
                        cardPower = 2;
                        break;
                    case '3':
                        cardPower = 3;
                        break;
                    case '4':
                        cardPower = 4;
                        break;
                    case '5':
                        cardPower = 5;
                        break;
                    case '6':
                        cardPower = 6;
                        break;
                    case '7':
                        cardPower = 7;
                        break;
                    case '8':
                        cardPower = 8;
                        break;
                    case '9':
                        cardPower = 9;
                        break;
                    case 'J':
                        cardPower = 11;
                        break;
                    case 'Q':
                        cardPower = 12;
                        break;
                    case 'K':
                        cardPower = 13;
                        break;
                    case 'A':
                        cardPower = 14;
                        break;
                }
                switch (cardType) {
                    case 'S': cardType = 4; break;
                    case 'H': cardType = 3; break;
                    case 'D': cardType = 2; break;
                    case 'C': cardType = 1; break;
                }

            } else {
                cardPower = 10;
                cardType = currentCard[2];

                switch (cardType) {
                    case 'S': cardType = 4; break;
                    case 'H': cardType = 3; break;
                    case 'D': cardType = 2; break;
                    case 'C': cardType = 1; break;
                }

            }

            totalScore += Number(cardPower) * Number(cardType)
        }

        console.log(`${key}: ${totalScore}`);

    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
