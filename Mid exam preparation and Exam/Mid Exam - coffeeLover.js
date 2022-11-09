function coffeeLover(array) {

    let listCoffeeInStock = array
        .shift()
        .split(" ")
    let countOfCommand = Number(array.shift());


    for (let index = 0; index < countOfCommand; index++) {
        let command = array[index].split(" ");
        let operation = command[0];

        if (operation === "Include") {
            listCoffeeInStock.push(command[1]);
        }

        if (operation === "Remove") {
            let num = Number(command[2]);

            if (command[1] === "first" && num <= listCoffeeInStock.length) {
                listCoffeeInStock.splice(0, num)
            }
            if (command[1] === "last" && num <= listCoffeeInStock.length) {
                listCoffeeInStock.splice(-num)
            }
        }

        if (operation === "Prefer") {
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);

            if (index1 <= listCoffeeInStock.length && index2 <= listCoffeeInStock.length) {
                let currentIndex = listCoffeeInStock[index1];
                listCoffeeInStock[index1] = listCoffeeInStock[index2];
                listCoffeeInStock[index2] = currentIndex;
            }


        }

        if (operation === "Reverse") {
            listCoffeeInStock.reverse()
        }







    }
    console.log(`Coffees:`);
    console.log(listCoffeeInStock.join(" "));


}
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])

