function schoolLibrary(array) {
    let shelfWithBooks = array
        .shift()
        .split("&")

    let index = 0;
    let command = array[index]

    while (command !== "Done") {

        let commandArr = command.split(" | ")
        let operation = commandArr[0];

        if (operation === "Add Book") {
            let addBook = commandArr[1];
            if (!shelfWithBooks.includes(addBook)) {
                shelfWithBooks.unshift(addBook)
            }
        }
        if (operation === "Take Book") {
            let removebook = commandArr[1];
            if (shelfWithBooks.includes(removebook)) {
                let removeIndex = shelfWithBooks.indexOf(removebook);
                shelfWithBooks.splice(removeIndex, 1)
            }
        }

        if (operation === "Swap Books") {
            let book1 = commandArr[1];
            let book2 = commandArr[2];

            if (shelfWithBooks.includes(book1) && shelfWithBooks.includes(book2)) {
                let book1Index = shelfWithBooks.indexOf(book1)
                let book2Index = shelfWithBooks.indexOf(book2)
                let currentBook = shelfWithBooks[book1Index];
                shelfWithBooks[book1Index] = shelfWithBooks[book2Index];
                shelfWithBooks[book2Index] = currentBook;
            }
        }

        if (operation === "Insert Book") {
            let insertBook = commandArr[1];
            if (!shelfWithBooks.includes(insertBook)) {
                shelfWithBooks.push(insertBook)
            }
        }

        if (operation === "Check Book") {
            let indexCheck = Number(commandArr[1]);
            if (indexCheck <= shelfWithBooks.length - 1 && index >= 0) {
                console.log(shelfWithBooks[indexCheck]);
            }
        }

        index++;
        command = array[index]
    }

    console.log(shelfWithBooks.join(", "));

}
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"])




