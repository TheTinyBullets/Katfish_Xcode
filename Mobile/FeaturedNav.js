'use strict';

var React = require('react-native');
var REQUEST_URL = 'https://incandescent-inferno-4780.firebaseio.com/pond.json';
var userID;

var {
  StyleSheet,
  View,
  Text,
  Component,
  ListView
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

var BookList = React.createClass ({
  getInitialState() {
    //this will be replaced with a function that gets the facebook id of the user who logs in
    userID = '714387395';
    return {
      selectedTab: 'featured',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    return {
      traits : null
    }
  },

  componentDidMount(){
    this.fetchData();
  },

  render() {
    return (
      <View style={styles.container}>
      {this._renderTrait()}
      </View>
      );
  },

  fetchData () {
    console.log('fetching the stuff', this)
    return(
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: responseData[userID],
          loaded: true
        })
      })
      .done()
      )
  },

  _renderTrait: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrait}
        style={styles.listView}/>
      )
  },

  renderLoadingView() {
   return (
     <View style={styles.container}>
     <Text>
     Loading traits...
     </Text>
     </View>
     );
 },

 renderTraits(data, element, trait, callback) {
   var votes = data.length
   return (
     <View style={styles.container}>
     <View style={styles.rightContainer}>
     <Text style={styles.title}>{trait}</Text>
     <Text style={styles.year}>{votes}</Text>
     </View>
     </View>
     )
 }
});

module.exports = BookList;