const os = require("os");
const io = require('socket.io');

//Create function to get CPU information
exports.cpuAverage = function() {

  //Initialise sum of idle and time of cores and fetch CPU info
  var totalIdle = 0, totalTick = 0;
  var cpus = os.cpus();

  //Loop through CPU cores
  for(var i = 0, len = cpus.length; i < len; i++) {

    //Select CPU core
    var cpu = cpus[i];

    //Total up the time in the cores tick
    for(type in cpu.times) {
      totalTick += cpu.times[type];
   }     

    //Total up the idle time of the core
    totalIdle += cpu.times.idle;
  }

  //Return the average Idle and Tick times
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}


exports.calcCPU = function (start,end) {

    var idleDifference = end.idle - start.idle;
    var totalDifference = end.total - start.total;
  
    //Calculate the average percentage CPU usage
    return ( 100 - ~~(100 * idleDifference / totalDifference) ) ;

}

