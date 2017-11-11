const fileSystem = require('fs'); 

function readFilePromise(path){
    
        return new Promise((resolve,reject) => {
    
            fileSystem.readFile(path, (err,buff) => {
    
                if(err){
                    reject(err);
                    return;
                }
    
                resolve(buff);
    
            });
        });
} 
    
function WriteFilePromise(path,content){
    
    return new Promise((resolve,reject) => {

        fileSystem.writeFile(path,buff, (err) => {
            
            if(err){
                reject(err);
                return;
            }
            
            resolve();
        });
    });
        
}


function getStudents(){
    
}
    
function getFileAvg(){
    
    
}
    
readFilePromise('./students.txt')
    .then(getStudents)
    .then(students => readFilePromise('./scores.txt').then(getFileAvg(students)))
    .then(lines => WriteFilePromise('./avg.txt',lines.join('\n')))
    .then(console.log.bind(undefined,'it is all done!'))
    .catch(err => console.log(err));

