function messageTranslator(input) {

    let array = input.slice();
    let n = array.shift();

    let pattern = /([!])(?<command>[A-Za-z]{3,})\1([:]{1})([\[])(?<message>[A-Za-z]{8,})([\]])/g;

    for (let index = 0; index < n; index++) {
        let text = array[index];
        let matchedWords = pattern.exec(text);

        if (matchedWords) {
            let command = matchedWords.groups['command'];
            let message = matchedWords.groups['message'];

            let result = '';
            result += `${command}:`

            let arrcharOfMessage = message.split('')

            for (const element of arrcharOfMessage) {
                let num = element.charCodeAt();

                if (num !== 32) {
                    result += ` ${num}`
                }
            }

            console.log(result);
        } else {
            console.log(`The message is invalid`)
        }
    }

}
messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])


