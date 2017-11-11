const exec = require('child_process').exec;
const promisify = require('./MyLib/myLib.js').promisify;
const fileSystem = require('fs');


const execPromise = promisify(exec);
const writeFilePromise = promisify(fileSystem.writeFile);

const cleanLines = function (lines){

    return lines.split('\n')
                .filter(s => s.search('.txt') == -1 )
                .join('\r\n');

}

execPromise('dir /B')
    .then(lines => cleanLines(lines))
    .then(result => writeFilePromise('./filter1.txt',result))
    .then(() => execPromise('copy "./filter1.txt" "./filter2.txt"'))
    .then(() => console.log('done!'))
    .catch(error => console.log(error));


//EXECpr('copy ./filter1.txt filter2.txt')
  //  .then(() => console.log('ok!'))
    //.catch(error => console.log(error));
    