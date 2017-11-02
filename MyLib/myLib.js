//let loadsh = require('lodash');

//exports.fillWith = function (arr, elem, startIndex, endIndex) {
  //return loadsh.fill(arr, elem, startIndex, endIndex);/
//}

//exports.Sum = function (a,b){
  //  return a + b;
//}


exports.promisify = function(func){
    
    return function(...args){
      return new Promise((resolve,reject) => {    
            func(...args, (err,result) =>{

                if(err instanceof Error){
                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }
}


//another way
/*
module.exports = {
    
        fillWith : function (arr, elem, startIndex, endIndex) {
            return loadsh.fill(arr, elem, startIndex, endIndex);    
        }
    
        , // lol
    
        Sum : function (a,b){
    
            return a + b;
        }
    
}; 
*/    