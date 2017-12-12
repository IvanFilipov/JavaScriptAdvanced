function isTag(token){

    if(token[0] != '#' && token[0] != '.')
        return true;

    return false;

}

function isClass(token){

    return false;
}

function isId(token){

    return false;
}


function select(str){

    let tokens = str.split(' ');

    console.log(tokens);
    
    let wave = Array(document.body.children);

    console.log(wave);

    let res = [];

    tokens.forEach(tk => {
            
        if(isTag(tk)){
            
           

        }

        if(isClass(tk)){


        }

        if(isId(tk)){


        }
        
    });


};


select('div p[@x=\'baba\'] span');