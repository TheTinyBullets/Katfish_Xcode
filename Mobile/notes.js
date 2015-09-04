/*========================================================||
||   qualities in array form                              ||
||                                                        ||
||========================================================*/

var qualities = ["baller",
"leader",
"performer",
"teacher",
"romantic",
"analytical",
"brave",
"counseling",
"confident",
"creative",
"dynamic",
"driven",
"extroverted",
"flirty",
"mysterious",
"grounded",
"artsy",
"dreamer",
"funny",
"smart",
"careful",
"calm",
"decisive",
"reliable",
"thoughtful",
"loyal",
"sincere",
"versatile",
"understanding",
"independent",
"honest",
"kind"];

/*========================================================||
||   albrey image                                         ||
||                                                        ||
||========================================================*/

'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/08e/184/157ec24.jpg'

/*========================================================||
||   transforms for firebase data                         ||
||                                                        ||
||========================================================*/

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
    if (!person[quality]) {
      person[quality] = [];
    }
      person[quality].push(person.id)
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      console.log(i);

}
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      person[quality+"1"] = {};

}
  });
});


_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      person[quality+"1"][person[quality][i]] = true;

}
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      person[quality] = person[quality+"1"];

}
  });
});

_.each(qualities,function(quality) {
  _.each(data.pond, function(person){
for (var i = 0; i < person[quality].length; i++) {
      delete person[quality+"1"][person[quality][]];

}
  });
});

/*========================================================||
||   word cloud repeat function                           ||
||                                                        ||
||========================================================*/

String.prototype.repeat = function (count) {
  if (count < 1) { return ''; }
  var result = '', pattern = this.valueOf();
  while (count > 1) {
    if (count) { result += " " + pattern; }
    count >>= 1, pattern += " " + pattern;
  } return result + " " + pattern;
};

console.log("client".repeat(3));

console.log("---");

// console.log(data);
//
//_.each(data.pond, function(d){console.log(d.name);})

/*

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
});