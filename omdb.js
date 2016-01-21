var request = require('request');
var commands =process.argv;
var movieSearch = commands.slice([3]);
var parsedBody;
var fs = require('fs'); 

exports.showMovie = 
  request('http://www.omdbapi.com/?t='+movieSearch, function (error, response,body) {
    parsedBody = JSON.parse(response.body) ;
    if (parsedBody.Response === 'True' && response.statusCode == 200) {
      console.log('Title: '+parsedBody.Title);
      console.log('Rating: '+parsedBody.Rated);
      console.log('Release: '+parsedBody.Year);
      console.log('IMDB Rating: '+parsedBody.imdbRating);
      console.log('Country: '+parsedBody.Country);
      console.log('Language: '+parsedBody.Language);
      console.log('Plot: '+parsedBody.Plot);
      console.log('Actors: '+parsedBody.Actors); 
      var log = 'Title: '+parsedBody.Title+'\r\n'+'Rating: '+parsedBody.Rated +'\r\n'+ 'Release: '+parsedBody.Year+'\r\n'+'IMDB Rating: '+parsedBody.imdbRating +'\r\n'+'Country: '+parsedBody.Country+'\r\n'+'Language: '+parsedBody.Language+'\r\n'+'Plot: '+parsedBody.Plot+'\r\n'+'Actors: '+parsedBody.Actors+'\r\n'+'\r\n';
     fs.appendFile("./log.txt", log, function(err) {
      if(err) {
        return console.log(err);
      }

      });
  }
  console.log("log.txt was updated");
    if(parsedBody.Response === 'False'){
      console.log('Title: Mr. Nobody');
      console.log('Rating: R');
      console.log('Release: 2013');
      console.log('IMDB Rating: 7.9');
      console.log('Country: USA');
      console.log('Language: Engish');
      console.log('Plot: N/A');
      console.log('Actors: N/A'); 

    }
});
