
'use strict';

var Login = require('./js/Login');
var Featured = require('./js/Featured');
var Search = require('./js/Search');
var React = require('react-native');
var person = require('./js/PersonDB.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} = React;

var Katfish = React.createClass({
  render: function() {
    window.Katfish = this;
    if(!this.state){
      return (
        <Image
        source={{uri: 'http://chrissalam.com/bash/sailing.png'}}
        style={styles.loginImage}>
        <Login
        style={styles.loginContainer}/>
        </Image>
        );
    }
    else{
      return require('./js/TabBar')();
    }
  },
});

var styles = require('./js/styles.js');

AppRegistry.registerComponent('Katfish', () => Katfish);