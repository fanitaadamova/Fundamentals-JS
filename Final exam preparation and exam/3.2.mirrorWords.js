function mirrorWords(input) {

    let text = input.shift();
    let arrOfWords = [];
    let mirrorWords = [];
    let result = [];
    let patternt = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;

    let matchedWords = patternt.exec(text);
 
    //•	If you don`t find any valid pairs, print: "No word pairs found!"
    if (matchedWords) {
        while (matchedWords) {
            arrOfWords.push(matchedWords.groups['word1']);
            arrOfWords.push(matchedWords.groups['word2']);
            matchedWords = patternt.exec(text);   
        }

        let countOfPairsWords = arrOfWords.length / 2;
        console.log(`${countOfPairsWords} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

     
    for (let index = 0; index < arrOfWords.length; index += 2) {
        let firstWord = arrOfWords[index];
        let secondWord = arrOfWords[index + 1];

        let firstWordReversed = firstWord
        .split('')
        .reverse()
        .join('');

        if (firstWordReversed === secondWord) {
            mirrorWords.push(firstWord);
            mirrorWords.push(secondWord);
        }


    }
 
    if (mirrorWords.length > 1){
        console.log(`The mirror words are:`);

        for (let index = 0; index < mirrorWords.length; index += 2) {
            let firstMirrorWord = mirrorWords[index];
            let secondMirrorWord = mirrorWords[index + 1];
            result.push(`${firstMirrorWord} <=> ${secondMirrorWord}`)
        }
        
        console.log(result.join(', '));
    }else{
        console.log(`No mirror words!`);
    }


}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])