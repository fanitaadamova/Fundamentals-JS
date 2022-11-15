function stringSubstring(word, text) {

    let tokens = text.split(' ');
    let found = false;

    tokens.forEach(token => {
        if (token.toLowerCase() === word.toLowerCase()) {
            found = true;
            return console.log(word);;
        }
    });

    if (!found) {
        console.log(`${word} not found!`);
    }


}
stringSubstring('javascript',
'JavaScript is the best programming language'
)