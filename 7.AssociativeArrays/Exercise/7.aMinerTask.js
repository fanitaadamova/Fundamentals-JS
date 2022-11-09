function aMinerTask(array) {

    let collection = {};

    for (let index = 0; index < array.length; index += 2) {
        const resource = array[index];
        let quantity = Number(array[index + 1]);

        if (!collection.hasOwnProperty(resource)) {
            collection[resource] = 0
        }
        collection[resource] += quantity;
    }

    for (const key in collection) {
        console.log(`${key} -> ${collection[key]}`);
    }

}
aMinerTask(['gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])