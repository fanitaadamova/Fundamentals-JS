function thePianist(array) {

    let numberOfPices = array.shift();
    let objectPiece = {};

    for (let index = 0; index < numberOfPices; index++) {
        let line = array.shift();
        let currentList = line.split('|');
        let piece = currentList.shift();

        objectPiece[piece] = currentList;
    }


    let commandArr = array.shift().split('|');
    let command = commandArr.shift();

    while (command !== 'Stop') {

        if (command === 'Add') {
            let piece = commandArr.shift();

            if (!objectPiece.hasOwnProperty(piece)) {
                objectPiece[piece] = commandArr;
                let composer = commandArr[0];
                let key = commandArr[1];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        }

        if (command === 'Remove') {
            let piece = commandArr.shift();
            if (objectPiece.hasOwnProperty(piece)) {
                delete objectPiece[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        if (command === 'ChangeKey') {
            let piece = commandArr.shift();
            let newKey = commandArr.shift();

            if (objectPiece.hasOwnProperty(piece)) {
                let valueOfPiece = objectPiece[piece];
                valueOfPiece.pop();
                valueOfPiece.push(newKey);

                objectPiece[piece] = valueOfPiece;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        commandArr = array.shift().split('|');
        command = commandArr.shift();
    }

    for (const piece in objectPiece) {
        let composer = objectPiece[piece][0];
        let key = objectPiece[piece][1];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])