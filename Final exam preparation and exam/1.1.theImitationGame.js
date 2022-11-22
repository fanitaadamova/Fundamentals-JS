function theImitationGame(array) {

    let encryptedMessage = array.shift();

    let command = array.shift();
    while (command !== 'Decode') {
        let commandArr = command.split('|');
        let instruction = commandArr[0];

        if (instruction === 'ChangeAll') {
            let char = commandArr[1];
            let replacement = commandArr[2];

            //така оказвам, докато има char в стринг, замени със стойността на replacement
            while (encryptedMessage.includes(char)) {
                encryptedMessage = encryptedMessage.replace(char, replacement)  
              }    
        }

        if (instruction === 'Insert') {
            let index = commandArr[1];
            let char = commandArr[2];
            let currentMessage = encryptedMessage.substring(0, index);

            currentMessage += char;
            currentMessage += encryptedMessage.substring(index);
            encryptedMessage = currentMessage;
        }

        if (instruction === 'Move') {
            let numberOfLetters = commandArr[1];
            let currentArr = encryptedMessage.split('');

            let counter = 0;
            while (counter < numberOfLetters) {
                let currentChar = currentArr.shift();
                currentArr.push(currentChar)
                counter++;
            }

            encryptedMessage = currentArr.join('')
            
        }

        command = array.shift();
    }


    console.log(`The decrypted message is: ${encryptedMessage}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )