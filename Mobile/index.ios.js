
'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
var Firebase = require('firebase');
var d3 = require('d3');

/*========================================================||
||   These are the other views that need to be rendered   ||
||========================================================*/

var styles = require('./styles');
var Featured = require('./Featured');
var Search = require('./Search');
var helpers = require('./helpers');
var userID; // <--- A placeholder for the ID that will be captured during login

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 AppRegistry,
 Image,
 ListView,
 StyleSheet,
 TabBarIOS,
 Text,
 View,
 TouchableHighlight,
 Component,
 AlertIOS,
 NavigatorIOS,
 TouchableOpacity
} = React;

/*========================================================||
||   Creates the Katfish app on top of React Native       ||
||========================================================*/

class Katfish extends Component {

 constructor(props) {
   super(props);
   this.state = null;
 }

/*========================================================||
||   The render function is native and will be called     ||
||   every time the state is changed in the app           ||
||========================================================*/

  render() {
    return helpers.renderOption(this);
  }
}

AppRegistry.registerComponent('Katfish', () => Katfish);
module.exports.userID = userID;