const express = require('express');
const https = require('https');
const qs = require('querystring');
const concat = require('concat-stream');
const stream = require('stream');
const bodyParser = require('body-parser');

const xml = require("xml-parse");

const app = express();

//with use we attach middleware 
//and they are executed before the request handle
app.use(bodyParser.urlencoded({extended : false}));

//accept post params and response with JSON from them
app.post('/', function(req,res){

    req.pipe(concat ((body) =>{

        var params = qs.parse(body.toString());
        res.end(JSON.stringify(params) + '\n');
    }));


});

app.post('/Url', function(req,res){

    if(req.body.url == undefined ){

        res.send(404).end();
        return;
    }
    let url = req.body.url;

    //res.send('wanted url : ' + url);

    https.get(url,(innerRes) => {

        let trans = new stream.Transform({
            transform(chunk,encoding,callback){

                this.push(chunk.toString().toUpperCase());
                callback()
            }
        })

        innerRes.pipe(trans).pipe(res);             
            
    });

})


app.listen(3000, function () {
    
    console.log('server listening to port 3000');    
    
})