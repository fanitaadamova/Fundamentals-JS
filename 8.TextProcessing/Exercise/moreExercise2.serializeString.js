function serializeString(array) {
    let string = array[0].split('')
    let object = {};


    for (index = 0; index < string.length; index++) {
         let element = string[index]
        if (!object.hasOwnProperty(element)) {
            object[element] = `${index}`;
        } else {
            object[element] += `/${index}`;
        }
         
    }
   
    let objectEntries = Object.entries(object)

    for (const [symbol, indexs] of objectEntries) {
        console.log(`${symbol}:${indexs}`);
        
    }

}
serializeString(["avjavamsdmcalsdm"])