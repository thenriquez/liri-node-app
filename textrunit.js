var commands =process.argv;
var fs = require('fs');
   
exports.showtext = fs.readFile('./random.txt', function(err, f){
    var array = f.toString().split(',');
    commands[2] = array[0];
    commands[3] = array[1];

switch(commands[2]){
  case 'my-tweets':
    var tweetbuilder = require("./tweets.js");
    break;
  case 'spotify-this-song':
    var songbuilder = require("./song-search.js");
    break;
  case 'movie-this':
    var moviebuilder = require("./omdb.js");
    break;
    }
});