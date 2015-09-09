'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  styles = require('./styles'),
  person = require('./PersonDB'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef = ref.child("pond").child(person.id);

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 View,
 ScrollView,
 Text,
 Image,
 TouchableHighlight,
 Component
} = React;

/*========================================================||
||   Each list item and quality (eventually fetch)        ||
||========================================================*/

var indents = [],
  qualities = ["baller","leader","performer","teacher","romantic","analytical","brave","counseling","confident","creative","dynamic","driven","extroverted","flirty","mysterious","grounded","artsy","dreamer","funny","smart","careful","calm","decisive","reliable","thoughtful","loyal","sincere","versatile","understanding","independent","honest","kind"]

/*========================================================||
||   This allows each button to hit the specific quality  ||
||   Use null to remove items or true to add items        ||
||   Eventually replace "Test User" with the ID needed.   ||
||   This calls down specific images and makes the list   ||
||========================================================*/

class Featured extends Component {
  render() {
    this.getTraits();
    return (
      <View style={styles.featNavContainer}>
      <Image source={{uri: 'http://graph.facebook.com/' + person.id + '/picture?type=large'}}
      style={{marginTop: 80, width: 200, height: 200, borderRadius: 100}} />
      <Text></Text>
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        contentInset={{top: -50}}
        style={styles.scrollView}>
        {indents}
      </ScrollView>
      </View>
    );
  }
  getTraits(){
    for (var i = 0; i < qualities.length; i++) {
      var vote = {};
      vote[window.Katfish.userID] = true;
      (function runIt(variable){
        indents.push(
          <TouchableHighlight style={styles.featNavButton}
          onPress={()=>{personRef.child(variable).update(vote)}}>
            <Text style={styles.featNavButtonText}>{qualities[i]}</Text>
          </TouchableHighlight>);
      })(qualities[i])
    }
  }
}

module.exports = Featured;