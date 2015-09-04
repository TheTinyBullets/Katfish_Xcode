'use strict';

var React = require('react-native');

var {
 StyleSheet
} = React;

module.exports = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 rightContainer: {
   flex: 1,
   backgroundColor: "#3399FF"
 },
 title: {
   fontSize: 20,
   marginBottom: 8,
   textAlign: 'center',
 },
 year: {
   textAlign: 'center',
 },
 thumbnail: {
   width: 53,
   height: 81,
 },
 listView: {
   paddingTop: 20,
   backgroundColor: '#F5FCFF',
 },
 buttonText: {
   fontSize: 18,
   color: 'white',
   alignSelf: 'center'
 },
 button: {
   height: 44,
   flexDirection: 'row',
   backgroundColor: '#48BBEC',
   justifyContent: 'center',
 },

 //We need to fix this issue for the image to render in the background
 //instead of next to the login button
 backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    transform: [{'translate' : [0, 0, -99]}]
  },

});
