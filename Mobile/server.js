var app = require('express')();
var rp = require('request-promise');

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
  var options = {
    uri : 'https://incandescent-inferno-4780.firebaseio.com/pond.json.'+queryParam,
    method : 'GET'
  }
  var traits = [];
  rp(options)
  .then(function(response){
    var user = JSON.parse(body);
    for(var key in user[queryParam]){
      if(key !== 'name') traits.push([user[queryParam][key].length, key]);
    };
  })
  console.log(traits.sort().reverse());
}

app.listen(3000);
console.log( 'Server is listening on 3000' )