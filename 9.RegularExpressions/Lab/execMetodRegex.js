let pattern = /(?<funcName>[A-Za-z])+/gi;
let text = 'To match characters from other Glanguages3 such as Cyrillic4 or Hebrew6.'

//Този метод ни връща масиви с данни - има ли го в текста, на кой index го има,целия текат и numbering cather groop.
// За да може да изпринтим резилтатите, проверяваме с while, докато го има, ги принти.
let match  = pattern.exec(text);
console.log(match);


while (match) {
   
    console.log(match[0]);
    match  = pattern.exec(text);
}