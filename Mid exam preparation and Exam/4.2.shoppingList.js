function shoppingList(array) {

    let arrOfshoppingList = array[0].split(`!`);
    let index = 1;
    let command = array[index];

    while (command !== "Go Shopping!") {

        let commandArr = command.split(` `);
        let currentProduct = commandArr[1];

        if (commandArr[0] === "Urgent") {
            if (!arrOfshoppingList.includes(currentProduct)) {
                arrOfshoppingList.unshift(currentProduct);
            }
        }

        if (commandArr[0] === "Unnecessary") {
            if (arrOfshoppingList.includes(currentProduct)) {
                let itemIndex = arrOfshoppingList.indexOf(currentProduct);
                arrOfshoppingList.splice(itemIndex, 1)
                //other decision with filter
                //arrOfshoppingList = arrOfshoppingList.filter(x => x!= currentProduct)
            }
        }

        if (commandArr[0] === "Correct") {
            let currentProduct2 = commandArr[2];

            if (arrOfshoppingList.includes(currentProduct)) {
                let updateIndex = arrOfshoppingList.indexOf(currentProduct);
                arrOfshoppingList[updateIndex] = currentProduct2;
            }
        }

        if (commandArr[0] === "Rearrange") {
            if(arrOfshoppingList.includes(currentProduct)){
                let updateIndex = arrOfshoppingList.indexOf(currentProduct);
                let element = arrOfshoppingList[updateIndex]
                arrOfshoppingList.splice(updateIndex, 1)
                arrOfshoppingList.push(element)
            }         
        }
        
        index++;
        command = array[index];
    }

    console.log(arrOfshoppingList.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
