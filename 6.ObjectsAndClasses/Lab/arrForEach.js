function cats(array1) {
   // forEach 
    array1.forEach(element => console.log(element));
   // forOf
    for (const element of array1) {
        console.log(element)
    }

}
cats(['Mellow 2', 'Tom 5'])