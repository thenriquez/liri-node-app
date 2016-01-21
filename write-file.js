var commands =process.argv;
var fs = require('fs'); 
var log = commands[2]+','+ '"'+commands.slice([3]).join(' ')+'"' +'\r\n';

  if(commands[2] === 'my-tweets'){
  log = commands[2]+'\r\n';
  }
  if(commands[2] === 'do-what-it-says'){
  log = commands[2]+'\r\n';
  }
exports.textFile =
    fs.appendFile("./log.txt", log, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("log.txt was updated");
});