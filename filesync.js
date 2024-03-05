const fs = require('fs');

//const {readFileSync, writeFileSync} = require('fs');
//we use the dereferecning above to get two methods as fs is an object
const first = fs.readFileSync('./subfolder/first.txt','utf8');
const second = fs.readFileSync('./subfolder/second.txt','utf8');

console.log(first);
console.log(second);

//WRITEFILESYNC SYNTAX is (path, content)

fs.writeFileSync('./subfolder/result-combined.txt',`Here is the result of ${first} and ${second}`);

const third = fs.readFileSync('./subfolder/result-combined.txt','utf8');
console.log(third);