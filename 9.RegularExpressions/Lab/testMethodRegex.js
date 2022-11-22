let pattern = /\w+\(\)/gi;

let text = "Use test() whenever you want to know whether a pattern is found in a string. test() returns a boolean, unlike the String.prototype.search() method (which returns the index of a match, or -1 if not found)."

//С този метод проверяваме дали този pattern се среща в текста - Bollen, връща true or false
let hasMatcher = pattern.test(text);

console.log(hasMatcher);