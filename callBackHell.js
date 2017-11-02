const fileSystem = require('fs');

fileSystem.readFile('./students.txt', function(err,students){

    if(err)
        throw err;
    
        fileSystem.readFile('./scores.txt', function(err,scores){
            
                if(err)
                    throw err;
                
                let sc = scores.toString().split('\n')
                                .map(x => x.slice(4))
                                .map(x => x.split(' '))
                                .map(x => x.map( y => parseFloat(y)))
                                .map(x => x.reduce(function(sum,elem) { return sum + elem; },0))
                                .map(x => x / 3);
                
                console.log(sc);

                let res = students.toString().split('\n')
                            .map((x , i , arr) => x.concat(' ').concat(sc[i]))
                            .join('\r\n');

                fileSystem.writeFile('./results.txt', res, function(err){

                    if(err)
                        throw err;

                    console.log('done!');

                });

        });

});