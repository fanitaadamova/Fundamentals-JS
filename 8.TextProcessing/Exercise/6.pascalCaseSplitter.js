function pascalCaseSplitter(text) {

    let result = text[0];
    let lower = text.toLowerCase();

    for (let index = 1; index < lower.length; index++) {
        if (lower[index] !== text[index]) {
            result += ', '
        }
        result += text[index];
    }

    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')