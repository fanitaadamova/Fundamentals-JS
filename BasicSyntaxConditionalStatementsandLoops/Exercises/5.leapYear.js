function leapYear(year) {

    let currentYear = year;
    let isLeap = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;

    if (isLeap ) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}
leapYear(2003)