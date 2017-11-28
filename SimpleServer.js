const express = require('express');
const https = require('https');

const app = express();
const wCnt = require('./WordsCount').wordsCount;


app.get('/', function (req,res) {

    res.send('hello!');

})

app.post('/RequestBody', function (req,res) {

    console.log(req.body);
    res.send('done');

})


app.get('/fmi', function (req,res) {
    
        https.get('https://www.fmi.uni-sofia.bg/',(innerRes) =>{

            let data = '';

            innerRes.on('data', (chunk) => {
                data += chunk.toString();
            });

            innerRes.on('end', () => {

                let respText =  'most used word : ' ;
                respText += wCnt(data);

                res.send(respText).end();
            })
        });
    
})





app.listen(3000, function () {

    console.log('server listening to port 3000');    

})