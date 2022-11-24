function secretChat(array) {

    let message = array.shift();

    let line = array.shift();

    while (line !== 'Reveal') {
        let arrayOfline = line.split(':|:');
        let command = arrayOfline.shift();

        if (command === "InsertSpace") {
            let index = arrayOfline[0];
            let arrayOfMessage = message.split('');

            arrayOfMessage.splice(index, 0, ' ');
            message = arrayOfMessage.join('');

            console.log(message);
        }

        if (command === "Reverse") {
            let substring = arrayOfline[0];

            if (message.includes(substring)) {

                message = message.replace(substring, '');
                let reverseSubstring = substring
                    .split('')
                    .reverse()
                    .join('');

                message = message + reverseSubstring;
                console.log(message);
            } else {
                console.log(`error`);
            }


        }

        if (command === "ChangeAll") {
            let substring = arrayOfline[0];
            let replacement = arrayOfline[1];

            while (message.includes(substring)) {
                message = message.replace(substring, replacement)
            }
            console.log(message);
        }

        line = array.shift();

    }

    console.log(`You have a new text message: ${message}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)