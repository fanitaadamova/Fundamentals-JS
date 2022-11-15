function modernTimesOf(string) {

    const words = string.split(' ');

    for (const word of words) {

        const isValidWord = word.startsWith('#') && word.length > 1;

        if (isValidWord) {
            let isLetter = true;
            let wordCopy = '';
            for (let index = 1; index < word.length; index++) {
                let char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    //така взимаме chаr-a преди да сме направили големите букви на малки
                    wordCopy += word[index];
                }
            }

            if (isLetter) {
                console.log(wordCopy);
            }
        }

    }

}
modernTimesOf('Nowadays everyone uses # to tag a #special word in #socialMedia')