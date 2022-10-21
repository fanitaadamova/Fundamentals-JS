function bombNumbers(firstArr, secondArr) {
    
    let specialNumber = secondArr[0];
    let detonate = secondArr[1];
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {

        if (firstArr.includes(specialNumber)) {
            let index = (firstArr.indexOf(specialNumber)) - detonate;

            if (index < 0) {
                firstArr.reverse()
                let newIndex = firstArr.length - (detonate - Math.abs(index))
                firstArr.splice(newIndex, detonate)
                index = 0
                firstArr.reverse()
                firstArr.splice(index, detonate + 1)
            } else {
                firstArr.splice(index, ((detonate * 2) + 1))
            }
        }
    }

    for (const num of firstArr) {
        sum += num
    }
    console.log(sum);

}
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [4, 2])