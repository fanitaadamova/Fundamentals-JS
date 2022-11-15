function deserializeString(array) {

    let newArr = [];
    let object = {}
    let i = 0;
    let command = array[i]
    while (command !== "end") {

        let charArr = command.split(':')

        let char = charArr[0]
        let arrayOfIndex = (charArr[1]).split('/');

        for (const element of arrayOfIndex) {
            object[element] = char
        }

        i++;
        command = array[i]
    }

    let sortedObject = Object.entries(object).sort((a, b) => a - b)

    for (const kvp of sortedObject) {
        newArr.push(kvp[1])
    }
    console.log(newArr.join(''));

}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']) 