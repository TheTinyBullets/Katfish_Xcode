/*========================================================||
||   This script should be run if someone                 ||
||   logs in and doesn't already have a match in our db   ||
||========================================================*/

var test = require('tape'),
  newuser = {"name": "Test User", "id": "99999"},
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  pondRef = ref.child("pond"),
  breyRef = pondRef.child("714387395"),
  breyBallerRef = breyRef.child("baller"),
  dbGallery = [];

var qualities = ["baller","leader","performer","teacher","romantic","analytical","brave","counseling","confident","creative","dynamic","driven","extroverted","flirty","mysterious","grounded","artsy","dreamer","funny","smart","careful","calm","decisive","reliable","thoughtful","loyal","sincere","versatile","understanding","independent","honest","kind"];

test('database exists', function(t){
  t.ok(pondRef, 'DB connection works');
  t.equal(pondRef.key(),"pond");
  t.end();
});

test('brey exists', function(t){
  t.ok(breyRef, 'Brey connection works');
  t.equal(breyRef.key(),"714387395");
  t.end();
});

test('brey as a baller exists', function(t){
  t.ok(breyBallerRef, 'baller connection works');
  t.equal(breyBallerRef.key(),"baller");
  t.end();
});

/*========================================================||
||   Here we will run a setting make a new user           ||
||   logs in and doesn't already have a match in our db   ||
||========================================================*/

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
    newuserRef.remove();
    console.log("newuser name & ID removed successfully.");
  }
});

/*========================================================||
||   Database testing is asychhronous with Firebase       ||
||   This listener watches for updates and logs           ||
||========================================================*/

pondRef.on("value", function (snapshot) {
  console.log("# asychronous tests --------")
  console.log("DB changed to", Object.keys(snapshot.val()).length+" people");
});






