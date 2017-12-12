const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const { cpuAverage, calcCPU } = require('./cpu_count');

app.use(express.static('./server_cpu_to_client/public'));

app.get('/', function (req,res) {

    res.sendFile(__dirname + '/index.html');

})


server.listen(3000, function () {

    console.log('server listening to port 3000');    

})


io.on('connection', function (socket) {

    console.log('42');

    socket.emit('news', 0);
        
    socket.on('my other event', function (data) {

        var startMeasure = cpuAverage();

        setTimeout(() => {

            let endMeasure = cpuAverage();

            let percentageCPU = calcCPU(startMeasure, endMeasure);

            io.emit('news', percentageCPU + "% CPU Usage.");

        }, 1000);

    });

});


