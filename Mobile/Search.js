'use strict';

var React = require('react-native'),
  SearchNav = require('./SearchNav'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef = ref.child("pond").child("7725590")


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
            title: "Albrey's Traits",
            component: SearchNav
            }}/>
        );
    }
}

module.exports = Search;