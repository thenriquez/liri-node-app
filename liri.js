var commands =process.argv;
var filename = './random.txt';
var fs = require('fs'); 


switch(commands[2]){
  case 'my-tweets':
    var tweetbuilder = require("./twittertweets.js");
    //var filebuilder = require("./write-file.js");
    break;
  case 'spotify-this-song':
    var songbuilder = require("./song-search.js");
    //filebuilder = require("./write-file.js");
    break;
  case 'movie-this':
    var moviebuilder = require("./omdb.js");
    //filebuilder = require("./write-file.js");
      break;
  case 'do-what-it-says':
    var textbuilder = require("./textrunit.js");
    var filebuilder = require("./write-file.js");

    break;
  default:
    console.log('Oops Something went wrong');
    break;
}