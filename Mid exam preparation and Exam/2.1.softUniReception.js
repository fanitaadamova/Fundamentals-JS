function softUniReception(array) {

    let firstEmplAnswerPerHour = Number(array[0]);
    let secondEmplAnswerPerHour = Number(array[1]);
    let thirdEmplAnswerPerHour = Number(array[2]);

    let allStudents = Number(array[3]);

    let allEmplAnswerPerHour = firstEmplAnswerPerHour + secondEmplAnswerPerHour + thirdEmplAnswerPerHour;

    let allTime = 0;

    let hourCounter = 0;

    while (allTime < allStudents) {
        hourCounter++;

        if (hourCounter % 4 !== 0) {
            allTime += allEmplAnswerPerHour;
        }
    }

    console.log(`Time needed: ${hourCounter}h.`);
}
softUniReception(['3','2','5','40'])