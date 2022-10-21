function searchForNumber(nums, action) {

    let numbersToTake = action[0];
    let numbersToDelete = action[1];
    let specialNumber = action[2];

    let takenNumbers = nums.slice(0, numbersToTake);

    takenNumbers.splice(0, numbersToDelete);

    let count = 0;
    for (const number of takenNumbers) {

        if (number === specialNumber) {
            count++;
        }
    }

    console.log(`Number ${specialNumber} occurs ${count} times.`);

}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])