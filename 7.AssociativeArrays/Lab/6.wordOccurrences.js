function wordOccurrences(arr) {

    let wordOccurrences = {};

    for (const word of arr) {
        if (wordOccurrences.hasOwnProperty(word)) {
            let oldCount = Number(wordOccurrences[word]);
            let newCount = oldCount + 1;
            wordOccurrences[word] = newCount;
        } else {
            wordOccurrences[word] = 1;
        }
    }

    let entrieswordOccurrences = Object.entries(wordOccurrences);
    entrieswordOccurrences.sort((a, b) => b[1] - a[1])

    for (const [word, count] of entrieswordOccurrences) {
        console.log(`${word} -> ${count} times`);
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])