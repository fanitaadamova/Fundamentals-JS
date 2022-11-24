function activationKeys(array) {

    let activationKey = array.shift();

    let currentString = array.shift();

    while (currentString !== 'Generate') {

        let arrOfString = currentString.split('>>>');
        let command = arrOfString.shift();

        if (command === 'Contains') {
            let substring = arrOfString[0];

            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        }

        if (command === 'Flip') {
            let casing = arrOfString[0];
            let startIndex = arrOfString[1];
            let endIndex = arrOfString[2];

            let part = activationKey.substring(startIndex, endIndex);
            let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase()
            activationKey = activationKey.replace(part, newPart)

            console.log(activationKey);
        }
        if (command === 'Slice') {
            let startIndex = arrOfString[0];
            let endIndex = arrOfString[1];
            
            let substring = activationKey.substring(startIndex, endIndex);
            //така отрязваме намерения стринг по горе - реално го заместваме с празен стринг
            activationKey = activationKey.replace(substring, '')
            console.log(activationKey);
        }


        currentString = array.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
