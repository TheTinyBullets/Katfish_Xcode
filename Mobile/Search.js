'use strict';

/*========================================================||
||   Set up react and firebase                            ||
||   Call up other files needed locally                   ||
||========================================================*/

var React = require('react-native'),
  SearchNav = require('./SearchNav'),
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

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: personName,
            component: SearchNav
            }}/>
        );
    }
}

module.exports = Search;