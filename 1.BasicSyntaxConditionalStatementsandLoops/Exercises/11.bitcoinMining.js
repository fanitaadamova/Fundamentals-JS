function bitcoinMining(input) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;

  let index = 0;
  let gold = Number(input[index]);
  index++;

  let goldSum = 0;
  let bitcoin = 0;
  let countDays = 0;
  let day = 0;

  while (gold !== undefined) {
    countDays++;
    gold = Number(gold);
    if (countDays % 3 === 0) {
      goldSum += goldPrice * gold * 0.7;
    } else {
      goldSum += goldPrice * gold;
    }
    if (goldSum >= bitcoinPrice) {
      for (let i = goldSum; i >= bitcoinPrice; i -= bitcoinPrice) {
        goldSum -= bitcoinPrice;
        bitcoin++;
        if (bitcoin === 1) {
          day = countDays;
        }
      }
    }

    gold = input[index];
    index++;
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin !== 0) console.log(`Day of the first purchased bitcoin: ${day}`);
  console.log(`Left money: ${goldSum.toFixed(2)} lv.`);

}

bitcoinMining([3124.15, 504.212, 2511.124]);