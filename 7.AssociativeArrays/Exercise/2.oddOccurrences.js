function oddOccurrences(words) {

    let resultObject = {};

    let allWords = words
        .split(" ")
        .map(w => w.toLowerCase())
        
    let allWordsLenhth = allWords.length;


    for (let i = 0; i < allWordsLenhth; i++) {
        //проверявам дали го има и ако го няма сетваме празен масив
        if (!resultObject.hasOwnProperty(allWords[i])) {
            resultObject[allWords[i]] = [];
        }
        //ако го има пушваме нещо, каквто и да било, защото след това гледаме само дължината на масива
        resultObject[allWords[i]].push(i)
    }
      //така сортирам value array
    const sorted = Object.entries(resultObject).sort((a, b) => a[1][0] - b[1][0]);
 
    let res = ""

    for (const [word, arr] of sorted) {
        if (arr.length % 2 !== 0) {
            res += `${word} `
        }
    }
    console.log(res);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')