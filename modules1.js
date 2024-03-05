
const names = require('./names');
// const {john,sam} = require('./names');
const hi = require('./utils');


const alterImport = require('./alternativeexports');
console.log(alterImport);
console.log(names);
console.log(hi);

hi("Susan");
hi(names.john);
hi(names.sam);

//we are importing whole of the importingCompolete.js

require('./importingComplete'); // This give the output of the \
//function defined in the importingCompelte as whenever you
//call a complete file which has a method invoked in it
// we shall execute that complete function in our imported file

