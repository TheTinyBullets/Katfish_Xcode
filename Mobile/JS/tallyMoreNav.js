/*========================================================||
||   The Tally of each friend                             ||
||========================================================*/

'use strict';

var React = require('react-native'),
  person = require('./PersonDB'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  styles = require('./styles');

var {
  View,
  Text,
  TouchableHighlight,
  ListView,
  Image
} = React;

var TallyMoreNav = React.createClass ({

  getInitialState() {

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
          traits: snapshot.val().pond[window.Katfish.userID],
          loaded: true});
      });
      return this.renderLoadingView();
    }
    var traits = this.state.traits;
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
       countVotes.push(count  + " " + vote + "\n");
       traits.push(key.replace(/\w/,function(s){return s.toUpperCase(); }) + "\t\t\t\n");
     }
   }

     return (
      <Image source={{uri: 'http://chrissalam.com/bash/beach-3.jpg'}} style={{backgroundColor: 'transparent', height: 700, resizeMode: 'stretch',width: 400}}>
        <View style={{flexDirection: 'row', alignItems: 'auto', marginTop: 200, marginLeft: 60}}>
          <View style={{flexDirection:'column'}}>
            <Text numberOfLines={lines} style={styles.tallyNavChoiceText}>{traits}</Text>
          </View>
          <View style={{flexDirection:'column'}}>
            <Text numberOfLines={lines} style={styles.tallyNavChoiceText}>{countVotes}</Text>
          </View>
        </View>
      </Image>
     )
   }

 });

 module.exports = TallyMoreNav;