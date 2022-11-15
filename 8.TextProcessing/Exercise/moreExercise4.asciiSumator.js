function asciiSumator(array) {
    
 let firstLine = array[0].charCodeAt();
 let secondLine = array[1].charCodeAt();
 let arrOfstring = array[2].split('');
 let sum = 0;

 for (const element of arrOfstring) {
     let currentLine = element.charCodeAt();

     if (firstLine < secondLine) {            
        if (firstLine < currentLine && currentLine < secondLine){
            sum+=currentLine
         }
     } else{
        if (secondLine < currentLine && currentLine < firstLine){
            sum+=currentLine
         }
     }

     
 }

console.log(sum);
    
}
asciiSumator(['?',
'E',
'@ABCEF']

)