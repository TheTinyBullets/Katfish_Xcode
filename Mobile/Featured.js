'use strict';

var React = require('react-native'),
  FeatNav = require('./FeaturedNav'),
  personID = require('./PersonDB'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef = ref.child("pond").child(personID),
  personName;

personRef.on('value', function (snap) {
  personName = snap.val().name;
})

var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: "Katfish Me!",
            component: FeatNav
            }}/>
        );
    }
}

module.exports = Featured;