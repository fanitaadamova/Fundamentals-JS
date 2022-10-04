function dayOfWeek(numberOfDay) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (numberOfDay >= 1 && numberOfDay <= 7) {
        console.log(days[numberOfDay - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}
dayOfWeek(0) 