
'use strict';

var React = require('react-native');
//var FB = require('fb');
var FBSDKLogin = require('react-native-fbsdklogin');
var FBSDKCore = require('react-native-fbsdkcore');
var Login = require('./JS/Login')

//**********************From this point until the next is broken core login

// var params = {
//   userId: '123456789'
// }
// var token = "CAAGZCY3FYPOMBAEsXn8A7L1ZC9jm7ZAR5FwJ4LIhQjeyQuCme…JM9Di9Q4CnZCDZCxPbco14sFnkkpq1fjQuLEPB5o11TGBVEZD"
// var ver = 'v2.4'
//Create a graph request asking for friends with a callback to handle the response.
//FBSDKGraphRequestManager.batchRequests([profileRequest], function() {}, 60);
// <----------- insert the function here fool
// Start the graph request.
//

// console.log(FBSDKGraphRequest)

//**********************************This point


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} = React;

var {
  FBSDKLoginButton,
} = FBSDKLogin;

var {
  FBSDKGraphRequest,
  FBSDKGraphRequestManager,
  FBSDKAccessToken
} = FBSDKCore;

//var Feed = require('./JS/Feed');
var Featured = require('./JS/Featured');
var Search = require('./JS/Search');

var fetchFriendsRequest = new FBSDKGraphRequest((error, result, params, token, ) => {
  if (error) {
    alert('Error making request.');
  } else {
    console.log('result from the graph req',result)
  }
}, '/me/friends', {}, 1234567890, 'v2.4', 'GET');
//fetchFriendsRequest.start();


var Katfish = React.createClass({

  render: function() {
    window.Katfish = this;
    if(!this.tokenString){
      this.getToken();
      return (
        <Image
        source={{uri: 'http://q8italk.com/wp-content/uploads/2014/10/Green-Starry-iPhone-6-plus-wallpaper-ilikewallpaper_com.png'}}
        style={styles.loginImage}>
        <Login
        style={styles.loginContainer}/>
        </Image>
        );
    }
    else{
      return require('./JS/TabBar')();
    }
  },
  getToken: function(){
    FBSDKAccessToken.getCurrentAccessToken((token) => {
      if (token) {
        // A non-null token indicates that the user is currently logged in.
        console.log('TOKEN: ', token);
        this.tokenString = token.tokenString;
        this.userID = token.userID;
      }else console.log('there is no token friend')
    });
    //this.getImage();
  },

  // getImage: function(){
  //   FB.api('/me/picture', 'get', function(response){
  //     if (!response || response.error) {
  //       alert('Error occured');
  //     } else {
  //       console.log(response);
  //     }
  //   })
  // }
});

var styles = require('./JS/styles.js');

AppRegistry.registerComponent('Katfish', () => Katfish);