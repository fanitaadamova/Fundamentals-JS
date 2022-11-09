function addressBook(list) {

    let addressBook = {};

    for (const line of list) {
        let [name, address] = line.split(":");
        addressBook[name] = address;

    }
    //convert associative array in normal array

    let addressBookEntries = Object.entries(addressBook);
    //sort the array

    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const [name, address] of addressBookEntries) {
        console.log(`${name} -> ${address}`);
    }


}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
) 