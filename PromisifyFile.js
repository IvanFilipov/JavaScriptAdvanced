const fileSystem = require('fs');
const promisify = require('./MyLib/myLib.js').promisify;


const WriteFilePromise = promisify(fileSystem.writeFile);

WriteFilePromise('./test.txt','hello,world!')
    .then(() => console.log('done'))
    .catch(err => console.log(err));

const ReadFilePromise = promisify(fileSystem.readFile);

ReadFilePromise('./test.txt')
    .then(result => console.log(result.toString()))
    .catch(err => console.log(err));


