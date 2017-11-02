function* idMaker(init) {
    let index = init;
    
    do{

        yield index;
        index++;
    }
    while(42);
    
}

let idGenerator = idMaker(1);


console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.next());




