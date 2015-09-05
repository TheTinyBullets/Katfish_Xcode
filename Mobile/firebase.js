/*========================================================||
||   Set up firebase and other node requirements          ||
||                                                        ||
||========================================================*/

var Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  pondRef = ref.child("pond");

/*========================================================||
||   Variables to use within the test script              ||
||========================================================*/

var qualities = ["baller","leader","performer","teacher","romantic","analytical","brave","counseling","confident","creative","dynamic","driven","extroverted","flirty","mysterious","grounded","artsy","dreamer","funny","smart","careful","calm","decisive","reliable","thoughtful","loyal","sincere","versatile","understanding","independent","honest","kind"],
  randomIDmaker = function(index) { return Object.keys(index)[Math.floor(Math.random()*Object.keys(index).length)]; };

/*========================================================||
||   This function will be called to access db            ||
||========================================================*/

function quizUpdate(name, quality) {
  return pondRef.child(name).child(quality);
} //"714387395" "baller"

/*========================================================||
||   This listener returns a snapshot of the db           ||
||   This is triggering async, use a different solution   ||
||========================================================*/

pondRef.on("value", function(snapshot){
  var index = snapshot.val();
  function gen(){
    var randomID = randomIDmaker(index),
    randomPerson = index[randomID].name,
    randomQuality = qualities[Math.floor(Math.random() * qualities.length-1)];
    console.log("Is " + randomQuality +" an accurate description of "+ randomPerson + "?");
    console.log("---------------------------");
  }
  gen();
  gen();
  gen();
});

/*========================================================||
||This opens a ref on albrey's baller quality for testing ||
||========================================================*/

var albreyBallerRef = quizUpdate("714387395","baller"),
  testcase = Boolean(new Date % 2);

albreyBallerRef.update({"Test User": testcase}, function(error) {
  if (error) {
    console.log("Data could not be saved." + error);
  } else {
    console.log("Data saved successfully.");
  }
});

/*========================================================||
||This opens a ref on albrey's baller quality for testing ||
||========================================================*/

var albreyRef = pondRef.child("714387395");
// albreyRef.on('child_added', added); //30 changes
albreyRef.on('value', updateName);

// albreyBallerRef.on('child_added', added); //two changes
// albreyBallerRef.on('value', update);

function added(idxSnap, prevId) {
    // when an item is added to the index, fetch the data
    pondRef.child(idxSnap.key()).once('value', function (dataSnap, prevId) {
      console.log("-------------------------------------------");
      console.log("Added:",dataSnap.key());
      console.log("-------------------------------------------");
    })
};
function update(snap) {
  console.log('Update:',snap.val());
}
function updateName(snap) {
  console.log('Update:',snap.val().name);
}

/*========================================================||
|| This is a listener that console logs the test string   ||
||========================================================*/

albreyBallerRef.on("value", function(snapshot) {
  console.log("Value: ",snapshot.val());
} , function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

/*========================================================||
||                                                        ||
||========================================================*/
