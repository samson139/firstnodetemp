const path = require('path');

console.log(path.sep);

//join, basename, resolve

const clubbedPath = path.join('/content','subfolder','test.txt')
console.log(clubbedPath)

const base = path.basename(clubbedPath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute);