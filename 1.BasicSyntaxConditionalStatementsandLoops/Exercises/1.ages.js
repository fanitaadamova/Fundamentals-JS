function ages(ages) {
    let currentAges = ages;
    let person = `out of bounds`

    if (0 <= currentAges && currentAges <= 2) {
        person = `baby`
    } else if (3 <= currentAges && currentAges <= 13) {
        person = `child`
    } else if (14 <= currentAges && currentAges <= 19) {
        person = `teenager`
    } else if (20 <= currentAges && currentAges <= 65) {
        person = `adult`
    } else if (currentAges >= 66) {
        person = `elder`
    } else {
        person = `out of bounds`
    }
    console.log(person);
}
ages(20)