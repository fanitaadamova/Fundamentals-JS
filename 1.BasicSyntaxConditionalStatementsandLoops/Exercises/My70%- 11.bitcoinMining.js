function bitcoinMining(input) {

    let index = 0;
    let i = input.length - 1;

    let priceOfBitcoin = 11949.16
    let priceOfGrGold = 67.51
    let resto = 0;
    let isFirstDay = false;
    let countday = 0;
    let countOfBitcoin = 0;

    let money1day = Number(input[index]) * priceOfGrGold
    let money2day = 0
    let money3day = 0

    while (index < i) {
        money1day = Number(input[index]) * priceOfGrGold
        if (index < i) {
            index++;
            money2day = Number(input[index]) * priceOfGrGold
        }
        if (index < i) {
            index++;
            money3day = Number(input[index]) * priceOfGrGold * 0.70
        }


        //day one purchace
        if (money1day >= priceOfBitcoin) {
            countday++;
            isFirstDay = true
            countOfBitcoin = Math.floor(money1day / priceOfBitcoin);
            resto = (money1day - (countOfBitcoin * priceOfBitcoin)) + money2day;

            if (resto >= priceOfBitcoin) {
                let currentCount = Math.floor(resto / priceOfBitcoin);
                resto = resto - (currentCount * priceOfBitcoin) + money3day;
                countOfBitcoin += currentCount;
                if (resto >= priceOfBitcoin) {
                    let currentCount = Math.floor(resto / priceOfBitcoin);
                    resto = resto - (currentCount * priceOfBitcoin)
                    countOfBitcoin += currentCount
                }
            } else if (money3day !== 0) {
                resto += money3day;

                if (resto >= priceOfBitcoin) {
                    let currentCount = Math.floor(resto / priceOfBitcoin);
                    resto = resto - (currentCount * priceOfBitcoin)
                    countOfBitcoin += currentCount
                }

            }

            //day two purchace
        } else if ((money2day + money1day) >= priceOfBitcoin) {
            resto = money2day + money1day;
            isFirstDay = true
            countday += 2;
            let currentCount = Math.floor(resto / priceOfBitcoin);
            countOfBitcoin += currentCount
            resto = (resto - (currentCount * priceOfBitcoin)) + money3day;

            if (resto >= priceOfBitcoin) {
                let currentCount = Math.floor(resto / priceOfBitcoin);
                resto = resto - (currentCount * priceOfBitcoin)
                countOfBitcoin += currentCount
            }
  //day tree purchace
        } else if ((money2day + money1day + money3day) >= priceOfBitcoin) {
            resto = money3day + money2day + money1day;
                let currentCount = Math.floor(resto / priceOfBitcoin);
                resto = resto - (currentCount * priceOfBitcoin)
                countOfBitcoin += currentCount
                isFirstDay = true
                countday += 3;
        } else {
            //day tree purchace
            resto = money3day + money2day + money1day;
            countday += 0;
        }
    }
    //Checking - array with only one ellement
    if (i === 0 || ( i % 3) === 0) {
        resto += money1day;
        if (resto >= priceOfBitcoin) {
            countday++;
            isFirstDay = true
            let currentCount = Math.floor(resto / priceOfBitcoin);
            resto = resto - (currentCount * priceOfBitcoin)
            countOfBitcoin += currentCount
        }
    }

    console.log(`Bought bitcoins: ${countOfBitcoin}`);
    if (countday !== 0 && isFirstDay == true) {
        console.log(`Day of the first purchased bitcoin: ${countday}`);
    }
    console.log(`Left money: ${(resto).toFixed(2)} lv.`);

}
bitcoinMining([0.000,5000.00])