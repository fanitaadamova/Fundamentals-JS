function countStringOccurrences(text, word) {

    let counter = 0;

    let array = text.split(' ')

    for (let index = 0; index < array.length; index++) {

        if (array[index] === word) {
            counter++
        }
    }

    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is')