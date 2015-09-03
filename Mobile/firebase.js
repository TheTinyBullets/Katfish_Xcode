/*========================================================||
||   Set up firebase and other node requirements          ||
||                                                        ||
||========================================================*/

var Firebase = require('firebase'),
  ref = new Firebase("https://receptacle.firebaseio.com/"),
  pondRef = ref.child("pond");

/*========================================================||
||   Variables to use within the test script              ||
||========================================================*/

var qualities = ["baller","leader","performer","teacher","romantic","analytical","brave","counseling","confident","creative","dynamic","driven","extroverted","flirty","mysterious","grounded","artsy","dreamer","funny","smart","careful","calm","decisive","reliable","thoughtful","loyal","sincere","versatile","understanding","independent","honest","kind"],
  randomIDmaker = function(index) { return Object.keys(index)[Math.floor(Math.random()*Object.keys(index).length)]; },
  randomQuality = qualities[Math.floor(Math.random() * qualities.length-1)],
  randomPerson;

/*========================================================||
||   This function will be called to access db            ||
||========================================================*/

function quizUpdate(name, quality) {
  return pondRef.child(name).child(quality);
} //"714387395" "baller"

/*========================================================||
||   This listener returns a snapshot of the db           ||
||========================================================*/

pondRef.on("value", function(snapshot){
  var index = snapshot.val(),
  randomID = randomIDmaker(index),
  randomPerson = index[randomID].name;
  console.log("Is " + randomQuality +" an accurate description of "+ randomPerson + "?");
  randomRef = quizUpdate(randomID, randomQuality);
});

/*========================================================||
||This opens a ref on albrey's baller quality for testing ||
||========================================================*/

var randomRef = quizUpdate("714387395","baller"),
  testcase = Boolean(new Date % 2);

randomRef.update({"Test User": testcase}, function(error) {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
  }
});

    // var groupsRef = fbRef.child('groups');
    // var indexRef = fbRef.child('users/mchen/groups');

    // /******************
    //  Monitor the index
    //  for add/remove events
    //  ******************/
    // indexRef.on('child_added', added);
    // indexRef.on('child_removed', removed);

    // function added(idxSnap, prevId) {
    //     // when an item is added to the index, fetch the data
    //     groupsRef.child(idxSnap.name()).once('value', function (dataSnap) {
    //         addToList(dataSnap.name(), dataSnap.val(), prevId);
    //     });
    // }

    // function removed(snap) {
    //     dropFromList(snap.name());
    // }

/*========================================================||
|| This is a listener that console logs the test string   ||
||========================================================*/

randomRef.on("value", function(snapshot, prevValue) {
  console.log("user",snapshot.val());
} , function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

/*========================================================||
||   Bunker Code --> keep for transforms or reference      ||
||========================================================*/

/* console.log(data);

_.each(data.pond, function(d){console.log(d.name);})

Object.keys(data.pond)

name =

for (quality in qualities) {
_.each(data.pond, function(d){if (!d[quality]) {d[quality] = []; } })
}

for (quality in qualities) {
_.each(data.pond, function(d){console.log(d);})
}

var app = require('express')();

app.listen(3000);
console.log( 'Server is running on 3000' );

pondRef.update({
});
 app.get('/', function(req, res){
  res.send('hello world');
 });

*******currently this is handling all requests to all paths************\\
it will need to be changed to handle the different types of requests.
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
On every database change, this snapshot is delivered to each device.
pondRef.on("child_added", function(snapshot, prevValue) {
  if (prevValue) { console.log("previous", prevValue); }
  console.log(snapshot());
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
}); */