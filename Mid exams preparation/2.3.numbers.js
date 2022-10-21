function numbers(stringOfNum) {

    let arrOfNum = stringOfNum.split(` `);
    let lengthArrOfNum = arrOfNum.length;
    let sum = 0;
    let greaterAvgArr = [];

    for (let i = 0; i < lengthArrOfNum; i++) {
        let currentNum = Number(arrOfNum[i]);
        sum += currentNum;
    }
    let avgOfNum = sum / lengthArrOfNum;

    for (let i = 0; i < lengthArrOfNum; i++) {
        let currentNum = Number(arrOfNum[i]);
        if (currentNum > avgOfNum) {
            greaterAvgArr.push(currentNum);
        }
    }

    greaterAvgArr.sort((a, b) => b - a);

    if (greaterAvgArr.length >= 5) {
        greaterAvgArr.splice(5)
    }

    if (greaterAvgArr.length < 1) {
        console.log(`No`);
    } else {
        console.log(greaterAvgArr.join(` `));
    }

}
numbers('10 20 30 40 50')