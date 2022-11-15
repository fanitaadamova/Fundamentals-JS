function replaceRepeatingChars(string) {

    let result = string[0];

    for (let index = 1; index < string.length; index++) {
        const current = string[index];
        const prev = string[index - 1]
        if (current !== prev) {
            result += current
        }
    }

    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')