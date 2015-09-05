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
||   View to render when user should log in               ||
||========================================================*/
module.exports = function(state){
  return (
    <View style={styles.container}>
    <Image
    style={styles.backdrop}
    source={require('./bgImage.png')} />
        <Text style={styles.welcome}></Text>
    <TouchableOpacity
    onPress={handlePress.bind(state)}
    dataSource={state}>
        <Image
        source={require('./fblogin.png')}
        style={styles.button}/>
    </TouchableOpacity>
    </View>
    )
}

var handlePress = function() {
    //this will be filled with the logic to get the Facebook login
    //included should be the FB userID
    //main.userID = '12345678'
    console.log('line 112, Login.js', this)
    this.setState ({
     selectedTab: 'featured'
   })
  }