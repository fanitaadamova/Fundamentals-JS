function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let type = ""
    Number.isInteger(sum) ? type = "Integer" : type = "Float";

    console.log(`${sum} - ${type}`);

}
integerAndFloat(9, 100, 1.1)