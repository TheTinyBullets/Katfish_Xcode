/*===========================================||
||   Required Modules for React Native       ||
||===========================================*/

var React = require('react-native'),
  styles = require('./styles'),
  FBSDKLogin = require('react-native-fbsdklogin'),
  FBSDKCore = require('react-native-fbsdkcore'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/");

/*===============================================||
||   Required components for React inline tags   ||
||===============================================*/

var {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} = React;

/*====================================================||
||   Required components for FBSDKLogin inline tags   ||
||====================================================*/

var {
  FBSDKLoginButton,
} = FBSDKLogin;

/*====================================================||
||   Required components for FBSDKLogin inline tags   ||
||====================================================*/

var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager,
  FBSDKAccessToken
} = FBSDKCore;

/*======================================================||
||  Facebook Graph API calls that get our ID and token  ||
||======================================================*/

var fetchMyId = new FBSDKGraphRequest((error, result) => {
 if (error) {
   console.log('Error making request.', error);
 } else {
  console.log('FB id received')
  window.Katfish.userName = result.name;
  window.Katfish.userID = result.id
  ref.on("value", function (snap) {
    console.log();
    if (Object.keys(snap.val().pond).indexOf(result.id) > -1) {
      console.log("Welcome, previous user!");
    }
    else {
      console.log("Let's make you a new user!");
      var newuser = {"name": result.name, "id": result.id};
      var qualities = ["baller", "leader", "performer", "teacher", "romantic", "analytical", "brave", "counseling", "confident", "creative", "dynamic", "driven", "extroverted", "flirty", "mysterious", "grounded", "artsy", "dreamer", "funny", "smart", "careful", "calm", "decisive", "reliable", "thoughtful", "loyal", "sincere", "versatile", "understanding", "independent", "honest", "kind"];
      var newuserRef = ref.child("pond").child(result.id),
        i;

        for (i = 0; i < qualities.length; i++) {
          newuser[qualities[i]] = {};
          newuser[qualities[i]][result.id] = true;
        }

        newuserRef.set(newuser, function (error) {
          if (error) {
            console.log("newuser name & ID could not be saved." + error);
          } else {
            console.log("newuser name & ID saved successfully.");
            // newuserRef.remove();
            // console.log("newuser name & ID removed successfully.");
          }
        });
    }
  });
 }
}, '/me', {}, this.tokenString, "v2.4", "GET");

/*=====================================================||
||  Facebook Graph API call that gets my friends list  ||
||=====================================================*/

var fetchFriendsRequest = new FBSDKGraphRequest((error, result) => {
 if (error) {
   console.log('Error making request.', error);
 } else {
   require('./PersonDB').fish(result.data);
 }
}, '/me/friends', {}, this.tokenString, "v2.4", "GET");

/*======================================================||
||  The request manager makes the calls on a timeout to ||
||  deal with the async issue. This issue is inherent   ||
||  in FBSDK, which requires a tiemout.                 ||
||======================================================*/

FBSDKGraphRequestManager.batchRequests([fetchFriendsRequest, fetchMyId], function (error) {
 if (error) {
   console.log("ERROR", error);
 }
}, 60);

var FacebookLoginManager = require('NativeModules').FacebookLoginManager;

var Login = React.createClass({

  login() {
    window.Login = this;
    FacebookLoginManager.newSession((error, info) => {
      if (error) {
        console.log('error logging in', error);
      } else {
        this.setState({result: info})
      }
    });
  },

  render() {
    window.Login = this;
    if(this.state){
      window.Katfish.setState({selectedTab : 'featured'});
    }
    return (
      <View style={this.props.style}>
        <TouchableHighlight onPress={this.login}>
          <Image
            source={require('../Images/fblogin.png')}
            style={styles.loginButton}/>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create(require('./styles.js'));

AppRegistry.registerComponent('Login', () => Login);
module.exports = Login;