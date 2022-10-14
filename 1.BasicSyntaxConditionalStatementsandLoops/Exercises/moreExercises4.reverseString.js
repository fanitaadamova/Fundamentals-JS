function reverseString(word) {
    let currentWord = word;
    let reverseWord = ""

    for (let i = currentWord.length - 1; i >= 0; i--) {
        reverseWord += currentWord[i];
    }
    console.log(reverseWord);
}
reverseString("Hello")
