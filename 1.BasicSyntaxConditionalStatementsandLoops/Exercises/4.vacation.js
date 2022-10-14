function vacation(numberOfpeople, typeOfGroup, dayOfWeek) {
    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                price = numberOfpeople * 8.45;
            } else if (dayOfWeek === "Saturday") {
                price = numberOfpeople * 9.80;
            } else if (dayOfWeek === "Sunday") {
                price = numberOfpeople * 10.46;
            }
            if (numberOfpeople >= 30) {
                price = price * 0.85;
            }
            break;
        case "Business":
            if (numberOfpeople >= 100) {
                numberOfpeople -= 10;
            }
            if (dayOfWeek === "Friday") {
                price = numberOfpeople * 10.90;
            } else if (dayOfWeek === "Saturday") {
                price = numberOfpeople * 15.60;
            } else if (dayOfWeek === "Sunday") {
                price = numberOfpeople * 16;
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                price = numberOfpeople * 15;
            } else if (dayOfWeek === "Saturday") {
                price = numberOfpeople * 20;
            } else if (dayOfWeek === "Sunday") {
                price = numberOfpeople * 22.50;
            }
            if (numberOfpeople >= 10 && numberOfpeople <= 20) {
                price = price * 0.95
            }
            break;
        default:
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")