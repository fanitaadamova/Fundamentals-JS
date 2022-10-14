function printDNA(helixLength) {
//Write a JS program that prints a DNA helix with a length, specified by the user. 
//The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
//The input comes as a single number. It represents the length of the required helix.
//The output is the completed structure, printed on the console.


    let sequence = "ATCGTTAGGG";
    let index = 0;
    let count = 0;
 
    while (count < helixLength) {
        console.log(`**${sequence[index]}${sequence[index + 1]}**`);
        index += 2;
 
        if (index >= sequence.length) {
            index = 0;
        }
 
        count++;
 
        if (count == helixLength) break;
 
        console.log(`*${sequence[index]}--${sequence[index + 1]}*`);
        index += 2;
 
        if (index >= sequence.length) {
            index = 0;
        }
 
        count++;
 
        if (count == helixLength) break;
 
        console.log(`${sequence[index]}----${sequence[index + 1]}`);
        index += 2;
 
        if (index >= sequence.length) {
            index = 0;
        }
 
        count++;
 
        if (count == helixLength) break;
 
        console.log(`*${sequence[index]}--${sequence[index + 1]}*`);
        index += 2;
 
        if (index >= sequence.length) {
            index = 0;
        }
 
        count++;
    }
}
printDNA(4)