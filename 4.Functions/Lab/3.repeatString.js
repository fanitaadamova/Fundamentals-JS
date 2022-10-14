function repeatString(string, repeat) {
  
    let result = ""
    for (let index = 0; index < repeat; index++) {
        result += string;    
    }
    return result;
}
let finalResult = repeatString("abc", 3)
console.log(finalResult);
