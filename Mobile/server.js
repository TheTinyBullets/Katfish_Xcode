var app = require('express')();
var $http = require('request');
 
 app.all('*', function(req, res){
  res.write ('you\'ve been Katfished!');
  getData();
  console.log('Katifish engaged');
});

var getData = function(queryParam){
  $http.get('https://incandescent-inferno-4780.firebaseio.com/pond', function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log(response);
    }
  });
}

app.listen(3000);