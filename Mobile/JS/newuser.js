/*========================================================||
||   This script should be run if someone                 ||
||   logs in and doesn't already have a match in our db   ||
||========================================================*/

/* assumed input from FB: {Kim Merino, 2529521} */
var newuser = {"name": "Casey Patterson", "id": "119553731730477"}

var Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  pondRef = ref.child("pond");

var qualities = ["baller","leader","performer","teacher","romantic","analytical","brave","counseling","confident","creative","dynamic","driven","extroverted","flirty","mysterious","grounded","artsy","dreamer","funny","smart","careful","calm","decisive","reliable","thoughtful","loyal","sincere","versatile","understanding","independent","honest","kind"];
  // randomIDmaker = function(index) { return Object.keys(index)[Math.floor(Math.random()*Object.keys(index).length)]; };

pondRef.on("value", function (snapshot) {
  var index = snapshot.val();
  //albrey test
  console.log(index["714387395"].name +" is a user: "+ Boolean(Object.keys(index).indexOf("714387395") >= 0))
  console.log("---------------------------");
  //kim test
  console.log(newuser.name +" is a user: "+ Boolean(Object.keys(index).indexOf(newuser.id) >= 0));
  console.log("---------------------------");
});

var newuserRef = pondRef.child(newuser.id);
  for (var i = 0; i < qualities.length; i++) {
    newuser[qualities[i]] = {};
    newuser[qualities[i]][newuser.id] = true;
  }
  newuserRef.set(newuser, function(error) {
    if (error) {
      console.log("newuser name & ID could not be saved." + error);
    } else {
      console.log("newuser name & ID saved successfully.");
    }

  });

  // newuserRef.remove();

