function monthPrinter(number) {

    let currentNumber = number;
    let mounth = `Error!`

    switch (currentNumber) {
        case 1:
            mounth = `January`
            break;
        case 2:
            mounth = `February`
            break;
        case 3:
            mounth = `March`
            break;
        case 4:
            mounth = `April`
            break;
        case 5:
            mounth = `May`
            break;
        case 6:
            mounth = `June`
            break;
        case 7:
            mounth = `July`
            break;
        case 8:
            mounth = `August`
            break;
        case 9:
            mounth = `September`
            break;
        case 10:
            mounth = `October`
            break;
        case 11:
            mounth = `November`
            break;
        case 12:
            mounth = `December`
            break;
        default:
            mounth = `Error!`
            break;
    }
    console.log(mounth);
}
monthPrinter(0)