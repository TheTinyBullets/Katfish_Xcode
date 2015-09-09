'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  Firebase = require('firebase'),
  reactfire = require('reactfire'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  person = {};

/*========================================================||
||   Setting for individual id (table below)              ||
||========================================================*/

  person.id = '119553731730477';

/*========================================================||
||   Accessing the database through firebase functions    ||
||========================================================*/

var personRef = ref.child("pond").child(person.id);

personRef.on("value", function (snap) {
  person.name = snap.val().name;
})

personRef.on('value', function (snap) {
  person.baller = snap.val().baller;
})

/*========================================================||
||   Make the person available throught the application   ||
||========================================================*/

module.exports = person;

/*========================================================||
||   IDs of sample data                                   ||
||========================================================*/

  // albrey is '714387395';
  // preston is '7725590';
  // claire is '10400802';
  // kent is '1048410103';
  // 10102692890098514;
  // bianca is '1036530404';
  // kim is '2529521';
  // casey is "100010275515528";