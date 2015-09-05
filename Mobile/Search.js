'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
var Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef = ref.child("pond").child(personID),
  personName;

/*========================================================||
||   Locally required sources                             ||
||========================================================*/

var styles = require('./styles')
var SearchNav = require('./SearchNav');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
    NavigatorIOS,
    Component
   } = React;


/*========================================================||
||   Adds the Search view on top of Katfish               ||
||========================================================*/

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.searchContainer}
                initialRoute={{
            title: personName,
            component: SearchNav
            }}/>
        );
    }
}

module.exports = Search;