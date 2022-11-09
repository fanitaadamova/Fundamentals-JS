function storage(array) {
    //map is iterable
    let map = new Map();

    for (const line of array) {
        let [item, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (map.has(item)) {
            let currentQuantity = map.get(item)
            let newQuantity = currentQuantity + quantity;
            map.set(item, newQuantity);
        } else {
            map.set(item, quantity);
        }

    }

    for (const kvp of map) {

        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
    //alternative decision
    // for (const [item, quantity] of map.entries()) {
    //    console.log(`${item} -> ${quantity}`);
    // }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)