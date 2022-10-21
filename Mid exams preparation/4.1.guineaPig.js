function guineaPig(array) {
    array.map(x => Number(x))

    let foodInGrams = array[0] * 1000;
    let hayInGrams = array[1] * 1000;
    let coverInGrams = array[2] * 1000;
    let pigWeightInGrams = array[3] * 1000;
    let days = 0;
    let isNeedThingsFinished = false

    let eatPerDay = 300

    while (days < 30) {
        days++;
        if (foodInGrams - eatPerDay > 0) {
            foodInGrams -= eatPerDay;
        } else {
            isNeedThingsFinished = true;
            break;
        }

        if (days > 0 && days % 2 === 0) {
            if (hayInGrams - (foodInGrams * 0.05) > 0) {
                hayInGrams -= foodInGrams * 0.05
            } else {
                isNeedThingsFinished = true;
                break;
            }
        }

        if (days % 3 === 0) {
            if (coverInGrams - pigWeightInGrams / 3 > 0) {
                coverInGrams -= pigWeightInGrams / 3
            } else {
                isNeedThingsFinished = true;
                break;
            }
        }
    }

    if (!isNeedThingsFinished && foodInGrams !== 0 && hayInGrams !== 0 && coverInGrams !== 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }

}
guineaPig(["9","5","5.2","1"])





