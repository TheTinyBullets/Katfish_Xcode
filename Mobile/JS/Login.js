var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = React;

var FacebookLoginManager = require('NativeModules').FacebookLoginManager;

var Login = React.createClass({

  getInitialState() {
    return {
      result: null
    }
  },

  login() {
    FacebookLoginManager.newSession((error, info) => {
      if (error) {
        this.setState({result: error});
      } else {
        this.setState({result: info})
      }
    });
  },

  render() {
    if(!this.state.result){
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