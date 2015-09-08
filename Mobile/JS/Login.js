
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
} = React;

var FBSDKLogin = require('react-native-fbsdklogin');
var {
  FBSDKLoginButton,
} = FBSDKLogin;

var Login = React.createClass({
  render: function(a, b, c, d) {
    console.log(a)
    return (
      <View style={this.props.style}>
        <FBSDKLoginButton
          style={styles.loginButton}
          onLoginFinished={(error, result) => {
            window.Katfish.setState({selectedTab : 'featured'})
            if (error) {
              console.log('Error logging in.');
            } else {
              if (result.isCanceled) {
                console.log('Login cancelled.');
              } else {
                console.log('Logged in.');
              }
            }
          }}
          onLogoutFinished={() => console.log('Logged out.')}
          readPermissions={['public_profile','user_friends','email']}
          publishPermissions={[]}/>
      </View>
    );
  }
});

var styles = StyleSheet.create(require('./styles.js'));

module.exports = Login;