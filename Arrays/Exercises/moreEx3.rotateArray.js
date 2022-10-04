function rotateArray(array) {
// add element before all element - the last element become the first and array should be rotated to the right side
let indexOflastElement = Number(array.length) - 1;    
let rotate = Number(array[indexOflastElement])
// remove last element with pop
array.pop();

for (let i = 0; i < rotate; i++) {
    
        for (let j = 0; j <= array.length; j++) {

            let currentElement = array.pop();
            array.unshift(currentElement);
        }
} 
console.log(array.join(` `));

}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])

