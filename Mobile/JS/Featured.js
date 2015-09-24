'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  person = require('./PersonDB'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef = ref.child("pond").child(person.id),


/*========================================================||
||   Locally required sources                             ||
||========================================================*/

  FeatNav = require('./FeaturedNav'),
  styles = require('./styles');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
    NavigatorIOS,
    Component,
    Image
   } = React;

class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.featContainer}
        initialRoute={{
          title: "Katfish your friend!",
          component: FeatNav
      }}/>
    );
  }
}

module.exports = Featured;