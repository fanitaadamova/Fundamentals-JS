function spiceMustFlow(startingYield) {

    let currentYield = startingYield;
    let spiceExtracted = 0;
    let days = 0;

    while (currentYield >= 100) {
        days++;
        spiceExtracted += currentYield - 26;
        currentYield -= 10;
    }

    if (spiceExtracted > 0) {
        console.log(days);
        console.log(spiceExtracted - 26);
    } else {
        console.log(days);
        console.log(spiceExtracted);
    }
}
spiceMustFlow(111)