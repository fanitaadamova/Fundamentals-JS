function orders(product, countity) {

    let totalPrice = 0;

    switch (product) {
        case "coffee":
            totalPrice = 1.50 * countity;
            break;
        case "water":
            totalPrice = 1.00 * countity;
            break;
        case "coke":
            totalPrice = 1.40 * countity;
            break;
        default:
            totalPrice = 2.00 * countity;
            break;
    }
    
    totalPrice = totalPrice.toFixed(2)
    return totalPrice
}
let finalResult = orders("water", 5)
console.log(finalResult);