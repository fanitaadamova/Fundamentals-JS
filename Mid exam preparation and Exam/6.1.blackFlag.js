function blackFlag(array) {

    let days = Number(array[0]);
    let dailyGain = Number(array[1]);
    let targer = Number(array[2]);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {

        totalPlunder += dailyGain;

        if (i % 3 === 0) {
            totalPlunder += dailyGain / 2;
        }

        if (i % 5 === 0) {
            totalPlunder = 0.7 * totalPlunder;
        }
    }

    if (totalPlunder >= targer) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalPlunder / targer) * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",
    "20",
    "380"])
