const exec = require('child_process').exec;
const promisify = require('./MyLib/myLib.js').promisify;
const fileSystem = require('fs');


const EXECpr = promisify(exec);
const WriteFilePromise = promisify(fileSystem.writeFile);

const CleanLines = function (lines){

    return lines.split('\n')
                .filter(s => s.search('.txt') == -1 )
                .join('\r\n');

}

EXECpr('dir /B')
    .then(lines => CleanLines(lines))
    .then(result => WriteFilePromise('./filter1.txt',result))
    .then(() => EXECpr('copy "./filter1.txt" "./filter2.txt"'))
    .then(() => console.log('done!'))
    .catch(error => console.log(error));


//EXECpr('copy ./filter1.txt filter2.txt')
  //  .then(() => console.log('ok!'))
    //.catch(error => console.log(error));
    