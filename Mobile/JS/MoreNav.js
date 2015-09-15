'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
var FBSDKLogin = require('react-native-fbsdklogin');
var FBSDKCore = require('react-native-fbsdkcore'),
person = require('./PersonDB'),
Login = require('./Login'),
Firebase = require('firebase'),
ref = new Firebase("https://katfish.firebaseio.com/"),
personRef;

/*========================================================||
||   Locally defined variables                            ||
||========================================================*/
var _ = require('underscore');
var styles = require('./styles');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 View,
 Text,
 Component,
 ListView,
 Image,
 TouchableHighlight,
} = React;

var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager,
  FBSDKAccessToken
} = FBSDKCore;

/*========================================================||
||   Adds the SearchNav view on top of Katfish            ||
||========================================================*/
var MoreNav = React.createClass ({
  render() {
    if(this.state){
     return this.renderTraits(this.state.traits);
   }else{
    this.fireCall();
    return this.renderLoadingView();
  }
},
clickHandler() {
  window.Login.state = null;
  window.Katfish.state = null;
},
renderLoadingView() {
  return (
    <View style={styles.container}>
    <Text> Loading traits... </Text>
    </View>
    );
},
renderTraits(list){
  // console.log(list)
  return (
    <View style={styles.moreNavContainer}>
    <Image source={{uri: 'http://graph.facebook.com/' + window.Katfish.userID + '/picture?type=large'}}
    style={{marginTop: 80, width: 200, height: 200, borderRadius: 100}} />
      <TouchableHighlight onPress={this.clickHandler}>
        <Image
          // source={require('../Images/fblogout.png')}
          style={styles.loginButton}/>
      </TouchableHighlight>
      <View>
        <Text numberOfLines={list.length} style={styles.title}>My friends say I am {list.slice(0,list.length-1).join(", ")} and {list.slice(list.length-1)}</Text>
      </View>
      <TouchableHighlight onPress={this.clickHandler}>
        <Image
          // source={require('../Images/fblogout.png')}
          style={styles.loginButton}/>
      </TouchableHighlight>
    </View>
    );
},
fireCall(){
  var that = this;
  var result = [[0,0]];
  ref.on("value", function(snapshot) {
    var temp = snapshot.val().pond[window.Katfish.userID];
    console.log(temp);
    for(var key in temp){
      if(key !== 'name' && key !== 'id'){
        if(result.length < 1) {
          result.push([key, Object.keys(temp[key]).length]);
        }
        else if(Object.keys(temp[key]).length >= result[result.length-1][1]){
          result.push([Object.keys(temp[key]).length, key ]);
        }
        else if(Object.keys(temp[key]).length >= result[0][1]){
          result.unshift([Object.keys(temp[key]).length, key]);
          result.sort();
        }
      }
    }
    result = result.reverse().splice(0,5);
    for(var i = 0; i < result.length; i++){
      result[i] = result[i][1]
    }
    that.setState({ traits : result })
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
});

module.exports = MoreNav;