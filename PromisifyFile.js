const fileSystem = require('fs');
const promisify = require('./MyLib/myLib.js').promisify;


const writeFilePromise = promisify(fileSystem.writeFile);

writeFilePromise('./test.txt','hello,world!')
    .then(() => console.log('done'))
    .catch(err => console.log(err));

const readFilePromise = promisify(fileSystem.readFile);

readFilePromise('./test.txt')
    .then(result => console.log(result.toString()))
    .catch(err => console.log(err));


