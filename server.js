var app = require('express')();
var $http = require('request');

 app.get('/', function(req, res){
  res.send('hello world');
 });
//*******currently this is handling all requests to all paths************\\
//it will need to be changed to handle the different types of requests.
 app.all('*', function(req, res){
  res.write ('you\'ve been Katfished!');
  var userID = req.url.toString().match(/[0-9]+/g)[0];
  console.log('Katifish engaged on ', userID);
  var result = getData(userID);
});

var getData = function(queryParam){
  var queryParam = queryParam;
  var traits = [];
  $http.get('https://incandescent-inferno-4780.firebaseio.com/pond.json', function(error, response, body){
    if (!error && response.statusCode == 200) {
      var user = JSON.parse(body);
      for(var key in user[queryParam]){
        if(key !== 'name') traits.push([user[queryParam][key].length, key]);
      };
      traits.sort().reverse();
    }
    console.log(traits);
  });
}

app.listen(3000);
console.log( 'Server is running on 3000' )
