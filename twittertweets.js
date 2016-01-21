var keys = require('./keys');
var Twitter = require('twitter');
var fs = require('fs'); 
var clients;
var params;
///twitter api key///
// exports.showTweets = 
// client = new Twitter({
//   consumer_key: '000000',
//   consumer_secret: '00000000',
//   access_token_key: '00000000',
//   access_token_secret: '000000',
// });

// params = {screen_name: 'am_thblueprint',
//               count: '10'};
// client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//     //console.log(tweets);
//     for(i=0;i<tweets.length;i++){
//       console.log(tweets[i].text);
//       console.log(tweets[i].created_at);
//       console.log(' ');

//       var log = tweets[i].text+'\r\n'+tweets[i].created_at+'\r\n'+'\r\n';
//       fs.appendFile("./log.txt", log, function(err) {
//         if(err) {
//         return console.log(err);
//         }
//       });
//     }
//         console.log("log.txt was updated");
//         }
//         else{
//           console.log("Duh!");
//         }
// });