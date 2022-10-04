function addAndRemove(array) {

    let newArray = [];
    let step = 1;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i]

        if (currentElement === 'add') {
            newArray.push(step)
        } else if (currentElement === 'remove') {
            // remove last element newArray.pop()
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            newArray.pop()
        }
        step++;
    }
    
    if (newArray.length > 0) {
        console.log(newArray.join(' '));
    } else {
        console.log(`Empty`);
    }
}
addAndRemove(['remove', 'remove', 'remove'])