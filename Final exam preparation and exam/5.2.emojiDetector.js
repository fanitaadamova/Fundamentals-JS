function emojiDetector(input) {

    let text = input.shift();
    let emojiCount = 0;
    let treshold = 1;
    let coolEmojis = [];

    let digits = text.match(/\d/g);
    
    for (const digit of digits) {
        let number = Number(digit);
        treshold *= number
    }

    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);

    for (const emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups['name']
        emojiCount++;

        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i)
        }

        if (emojiCoolnes >= treshold) {
            coolEmojis.push(emoji)
        }

    }

    console.log(`Cool threshold: ${treshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    for (const emoji of coolEmojis) {
        console.log(emoji);
    }


}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])