function biscuitFactory(array) {

    let prodicedPerWorker = Number(array[0]);
    let workersInFactory = Number(array[1]);
    let biscuitsCompeting = Number(array[2]);
    let allBiscuit = 0;

    let countOfDays = 0;
    let days = 30;

    while (countOfDays < days) {
        countOfDays++;
        if (countOfDays % 3 === 0) {
            allBiscuit += Math.floor(prodicedPerWorker * workersInFactory * 0.75);
        } else {
            allBiscuit += prodicedPerWorker * workersInFactory;
        }

    }

    console.log(`You have produced ${allBiscuit} biscuits for the past month.`);

    if (allBiscuit - biscuitsCompeting > 0) {
        let percentage = ((allBiscuit - biscuitsCompeting) / biscuitsCompeting * 100).toFixed(2)
        console.log(`You produce ${percentage} percent more biscuits.`);
    } else {
        let percentage = ((biscuitsCompeting - allBiscuit) / biscuitsCompeting * 100).toFixed(2)
        console.log(`You produce ${percentage} percent less biscuits.`);
    }

}
biscuitFactory(["65",
    "12",
    "26000"])

