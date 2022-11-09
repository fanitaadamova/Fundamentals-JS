function convertToJSON(first, second, hair) {

    let objPerson = {
        name: first,
        lastName: second,
        hairColor: hair,
    }

    console.log(JSON.stringify(objPerson));
}
convertToJSON('George', 'Jones', 'Brown')