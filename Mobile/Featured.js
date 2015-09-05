'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  personID = require('./PersonDB'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef = ref.child("pond").child(personID),
  personName;

personRef.on('value', function (snap) {
  personName = snap.val().name;
})


/*========================================================||
||   Locally required sources                             ||
||========================================================*/

var FeatNav = require('./FeaturedNav');
var styles = require('./styles');


/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
    NavigatorIOS,
    Component
   } = React;

class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.featContainer}
                initialRoute={{
            title: "Katfish Me!",
            component: FeatNav
            }}/>
        );
    }
}

module.exports = Featured;