function phoneBook(array) {
    
    let phoneBook = {};

    for (const element of array) {
        let arrElement = element.split(" ");
        let name = arrElement[0];
        let phone = arrElement[1];

        phoneBook[name] = phone
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])