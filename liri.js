// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
var request = require('request');
var Twitter = require('twitter');
var keys = require("./keys.js");
var command = process.argv[2];

console.log(command);
//console.log(keys);

switch(command) {
    case "twitter":
        getTwitter();
        break;
    default:
        console.log("You're not making sense fool!");
}

function getTwitter() {
    var client = new Twitter({
        consumer_key: keys.consumer_key,
        consumer_secret: keys.consumer_secret,
        access_token_key: keys.access_token_key,
        access_token_secret: keys.access_token_secret
    });

    var params = { screen_name: 'OroroWayne' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log("ERROR STARTS HERE ===================================")
            console.log(error)
            console.log("ERROR ENDS HERE =====================================")
        }

        // console.log(tweets);
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }
        // console.log(response);
    });
}

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });

// Make it so liri.js can take in one of the following commands:

// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says
