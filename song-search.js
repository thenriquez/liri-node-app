var spotify = require('spotify');
var songInfo;
var tempsong;
var commands =process.argv;
var query = commands.slice([3]);
var fs = require('fs'); 

exports.showSong = 
spotify.search({ type: 'track', query: query }, function(err, data) {
    if ( data.tracks.total === 0) {
      console.log('Artist: Blink 182');
      console.log('Song Title: Whats my age again');
      console.log('Preview: ');
      console.log('Album: Take Your Pants off and Jacket');
      console.log(' ');
        return;
    }
    songInfo = data.tracks.items;
  for(i=0;i<songInfo.length;i++){
    for(j=0;j<songInfo[i].artists.length;j++){
      tempsong = songInfo[i].artists[j];
      //console.log(tempsong);
    }

     console.log('Artist: '+tempsong.name);
     console.log('Song Title: '+songInfo[i].name);
     console.log('Preview: '+songInfo[i].preview_url);
     console.log('Album: '+songInfo[i].album.name);
     console.log(' ');

     var log = 'Artist: '+tempsong.name +'\r\n'+'Song Title: '+songInfo[i].name +'\r\n'+ 'Preview: '+songInfo[i].preview_url +'\r\n'+'Album: '+songInfo[i].album.name +'\r\n'+'\r\n';
     fs.appendFile("./log.txt", log, function(err) {
      if(err) {
        return console.log(err);
      }

      });
  }
  console.log("log.txt was updated");
   
});