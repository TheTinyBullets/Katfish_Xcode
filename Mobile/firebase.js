var app = require('express')();
var Firebase = require('firebase');
var ref = new Firebase("https://receptacle.firebaseio.com/");
var pondRef = ref.child("pond");

//On every database change, this snapshot is delivered to each device.
pondRef.on("value", function(snapshot) {
  for (var name in snapshot.val()) {

    for (var qual in snapshot.val()[name]){
      var str = " is ";
      if (snapshot.val()[name][qual] &&
          snapshot.val()[name][qual].length > 1 &&
          qual !== 'name' && qual !== 'id') {
        if (qual.match(/(\w+)er\b/)) { str += "a "; }
      console.log(snapshot.val()[name].name + str +"level", snapshot.val()[name][qual].length - 1 + ' ' + qual);
      }
    }
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Analytical


// pondRef.update({
// });
 // app.get('/', function(req, res){
 //  res.send('hello world');
 // });
//*******currently this is handling all requests to all paths************\\
//it will need to be changed to handle the different types of requests.
//  app.all('*', function(req, res){
//   res.write ('you\'ve been Katfished!');
//   var userID = req.url.toString().match(/[0-9]+/g)[0];
//   console.log('Katifish engaged on ', userID);
//   var result = getData(userID);
// });

// var getData = function(queryParam){
//   var queryParam = queryParam;
//   var traits = [];
//   $http.get('https://incandescent-inferno-4780.firebaseio.com/pond.json', function(error, response, body){
//     if (!error && response.statusCode == 200) {
//       var user = JSON.parse(body);
//       for(var key in user[queryParam]){
//         if(key !== 'name') traits.push([user[queryParam][key].length, key]);
//       };
//       traits.sort().reverse();
//     }
//     console.log(traits);
//   });
// }

app.listen(3000);
console.log( 'Server is running on 3000' )
