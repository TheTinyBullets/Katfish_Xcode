'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  REQUEST_URL = 'https://katfish.firebaseio.com/pond.json',
  Firebase = require('firebase'),
  person = require('./PersonDB'),
  ref = new Firebase("https://katfish.firebaseio.com/"),

/*========================================================||
||   Locally defined variables                            ||
||========================================================*/

  styles = require('./styles'),
  userID,
  traits;

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 View,
 Text,
 Component,
 ListView,
 Image
} = React;

/*========================================================||
||   Adds the SearchNav view on top of Katfish            ||
||========================================================*/
var SearchNav = React.createClass ({

  getInitialState() {
  //this will be replaced with a function that gets the facebook id of the user who logs in
  userID = person.id;

  return {
    selectedTab: 'search',
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      cloneWithRows: (['row 1', 'row 2'])
    }),
    loaded: false,
    traits : null
  };
},

render() {
  var that = this;
  if (!this.state.loaded) {
    ref.on("value", function(snapshot) {
      that.setState({
        traits: snapshot.val().pond[userID],
        loaded:true});
    });
    return this.renderLoadingView();
  }
  traits = this.state.traits;
  return this.renderTraits(traits);
},

renderLoadingView() {
 return (
   <View style={styles.container}>
     <Text> Loading traits... </Text>
   </View>
  );
},

renderTraits(traitData) {

  var lines = Object.keys(traitData).length,
    traits = [],
    countVotes = [],
    vote,
    count;

  for(var key in traitData){
    count = -1;
    for (var vote in traitData[key]) { count++; }
    if (key !== 'name' && key !== 'id' && count > 0) {
      var vote = "votes";
      if (count === 1) { vote = vote.replace(/s/,""); }
      countVotes.push(count  + " " + vote + "                                ");
      traits.push(key.replace(/\w/,function(s){return s.toUpperCase(); }) + "                      ");
    }
  }

    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Text numberOfLines={lines} style={styles.title}> {traits}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={lines} style={styles.title}> {countVotes}</Text>
        </View>
      </View>
    )
  }

});

module.exports = SearchNav;