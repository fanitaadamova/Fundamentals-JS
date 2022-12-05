function decryptingCommands(input) {

    let array = input.slice();
    let message = array.shift();

    let commands = array.shift();

    while (commands !== 'Finish') {
        let commandArr = commands.split(' ');
        let command = commandArr.shift();

        switch (command) {
            case 'Replace':
                let currentChar = commandArr[0];
                let newChar = commandArr[1];

                while (message.includes(currentChar)) {
                    message = message.replace(currentChar, newChar)
                }

                console.log(message);
                break;

            case 'Cut':
                let startIndex = Number(commandArr[0]);
                let endIndex = Number(commandArr[1]);

                if (message[startIndex] && message[endIndex]) {
                    let cut = message.substring(startIndex, endIndex + 1);
                    let messageCuted = message.replace(cut, '');
                    message = messageCuted;

                    console.log(message);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;

            case 'Make':
                let casing = commandArr[0];
                let newMessage = casing == 'Upper' ? message.toUpperCase() : message.toLowerCase();
                message = newMessage;

                console.log(message);
                break;

            case 'Check':
                let string = commandArr[0];

                if (message.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }
                break;

            case 'Sum':
                let startInd = Number(commandArr[0]);
                let endInd = Number(commandArr[1]);

                if (message[startInd] && message[endInd]) {

                    let part = message.substring(startInd, endInd + 1);
                    let partArray = part.split('')
                    let sum = 0;
                    for (const element of partArray) {
                        sum += element.charCodeAt();
                    }
                    
                     console.log(sum);
                } else {
                    console.log(`Invalid indices!`);
                }
                break;
        }
        commands = array.shift()
    }

}
decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])