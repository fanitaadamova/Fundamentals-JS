function partyTime(input) {

    let vipList = [];
    let regularList = [];


    let currentGuest = input.shift();
    //is Nan - retirn true or fale 
    while (currentGuest !== "PARTY") {
        if (!isNaN(currentGuest[0])) {
            vipList.push(currentGuest)
        } else {
            regularList.push(currentGuest)
        }

        currentGuest = input.shift();
    }
    //така конкатенираме двата масива
    let allList = vipList.concat(regularList);

    for (let el of input) {
        if (allList.includes(el)) {
            allList.splice(allList.indexOf(el), 1)
        }
    }

    console.log(allList.length);
    console.log(allList.join(`\n`));

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])