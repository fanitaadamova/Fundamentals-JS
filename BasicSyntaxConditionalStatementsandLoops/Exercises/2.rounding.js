function rounding(number, precision) {

    if (precision >= 15) {
        precision = 15
    }
    console.log(parseFloat(number.toFixed(precision)));
}
rounding(12.456709, 4)