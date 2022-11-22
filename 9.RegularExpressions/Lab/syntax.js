//Regex literal (global insensitive )
let pattern = /[A-Za-z]+/gi;
console.log(pattern instanceof RegExp);

//Regex constructor (global insensitive )
let regexp = new RegExp ('[A-Za-z0-9]','gi')
