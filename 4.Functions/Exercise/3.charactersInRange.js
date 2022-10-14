function charactersInRange(firstChar,secondChar) {
//ascii table
let startRang = Math.min(firstChar.charCodeAt (), secondChar.charCodeAt ())
let endRang = Math.max(firstChar.charCodeAt (), secondChar.charCodeAt ())
let resultString = [];

for (let currentChar = startRang + 1; currentChar < endRang; currentChar++) {
   
    let result = String.fromCharCode(currentChar);
    resultString.push (result);
    
}
console.log(resultString.join(` `));

}
charactersInRange('#',':')