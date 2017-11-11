exports.wordsCount = function (text){

    let reg = new RegExp('[A-Za-z]{4,}','g'); // perl style reg = /[A-Za-z]{4,}/g


    let map = {};
    
    //iterating with regular expression
    while((res = reg.exec(text)) !== null) {

        if(map[res[0]] == undefined)
            map[res[0]] = 1;
        else
            map[res[0]] += 1;

       // console.log(map[res[0]]);
    }

    //console.log(map);

    let maxKey = '';
    let maxOcc = 0;

    let arr = Object.keys(map).map((curr) => {

        if(map[curr] > maxOcc){
            maxOcc = map[curr];
            maxKey = curr;
        }
    })

    return maxKey;
//    console.log(maxKey);
}
