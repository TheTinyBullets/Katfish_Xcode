
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 var React = require('react-native');
 var Firebase = require('firebase');

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
  AlertIOS
} = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = 'https://incandescent-inferno-4780.firebaseio.com/pond.json'

var Katfish = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'Alert',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
      });
    })
    .done();
  },

  _renderAlert: function () {
    return (
      <View>
      <Text> </Text>
      <TouchableHighlight style={styles.button}
        onPress={this.showAlert}>
        <Text style={styles.buttonText}>Go</Text>
      </TouchableHighlight> 

      <Text style={styles.container}></Text>
      </View>
    )
  },

  _renderMovie: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
      )
  },

  render: function() {
   if (!this.state.loaded) {
     return this.renderLoadingView();
   }
   return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Alert!"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'Alert'}
          onPress={() => {
            this.setState({
              selectedTab: 'Alert'
            })
          }}>
        {this._renderAlert()}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Movies"
          systemIcon="history"
          selected={this.state.selectedTab === 'Movies'}
          onPress={() => {
            this.setState({
              selectedTab: 'Movies'
            })
          }}>
          {this._renderMovie()}
        </TabBarIOS.Item>
      </TabBarIOS>
     );
  },

 renderLoadingView: function() {
   return (
     <View style={styles.container}>
     <Text>
     Loading movies...
     </Text>
     </View>
     );
 },

 renderMovie: function(movie) {
   return (
     <View style={styles.container}>
     
     <View style={styles.rightContainer}>
     <Text style={styles.title}>{typeof(movie)}</Text>
     <Text style={styles.year}>{movie}</Text>
     </View>
     </View>
     );
 },

showAlert() {
  var obj = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '', 
      'Host': 'api.producthung.com'
    },
    body: JSON.stringify({
      'text': 'personality trait'
    })
  }

  fetch('http://192.168.1.40:3000/?714387395', obj)
    .then((res) => res.text())
    .then((resText) => {
    }) 
    .catch((error) => {
      console.warn(error)
    });
  AlertIOS.alert('Awesome Alert', 'This is my first React Native alert.', [{text: 'Thanks'}] )
}



});

var styles = require('./styles').style;

AppRegistry.registerComponent('Katfish', () => Katfish);