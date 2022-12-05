function fancyBarcodes(input) {

    let array = input.slice();
    let n = array.shift();
    let patternOfValidBarcode = /([@][#]+)(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])([@][#]+)/g

    for (let index = 0; index < n; index++) {
        let element = array[index];

        let validBarcode = element.match(patternOfValidBarcode)

        if (validBarcode) {
            let barcode = validBarcode[0];

            let patternOfproductGroup = /[0-9]/g;
            let productGroup = patternOfproductGroup.exec(barcode);

            if (productGroup) {
                let currentProductGroup = '';

                while (productGroup) {
                    currentProductGroup += productGroup[0]
                    productGroup = patternOfproductGroup.exec(barcode);
                }
                console.log(`Product group: ${currentProductGroup}`);
            } else {
                console.log(`Product group: 00`);
            }

        } else {
            console.log(`Invalid barcode`);
        }

    }

}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

