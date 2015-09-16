'use strict';

/*========================================================||
||   Required sources                                     ||
||========================================================*/

var React = require('react-native'),
  styles = require('./styles'),
  person = require('./PersonDB'),
  Firebase = require('firebase'),
  ref = new Firebase("https://katfish.firebaseio.com/"),
  personRef;

/*========================================================||
||   React native variables, used as inline tags          ||
||========================================================*/

var {
 View,
 ScrollView,
 Text,
 Image,
 TouchableHighlight,
 TouchableOpacity,
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

  getInitialState() {
    return {
      opacity: 0.2,
    }
  }

  render() {
    this.getTraits();
    return (
      <View style={styles.featNavContainer}>
        <Image source={{uri: 'http://chrissalam.com/bash/sailing.png'}} style={{backgroundColor: 'transparent', height: '600'}}>
          <Image source={{uri: 'http://graph.facebook.com/' + person.id + '/picture?type=large'}}
                 style={{marginTop: 40, marginLeft:20, width: 170, height: 170, borderRadius: 85}} />
            <ScrollView
              onScroll={() => { console.log('onScroll!'); }}
              scrollEventThrottle={200}
              contentInset={{top: -50}}
              style={styles.scrollView}>
              {indents}
            </ScrollView>

        </Image>
      </View>
    );
  }
  getTraits(){
    person.shuffle(qualities);
    personRef = ref.child("pond").child(person.id);
    for (var i = 0; i < qualities.length; i++) {
      var vote = {};
      vote[window.Katfish.userID] = true;
      (function runIt(variable){
        indents.push(
          <TouchableHighlight style={styles.featNavButton}
          activeOpacity={0.5}
          underlayColor={'white'}
          onPress={()=>{
            personRef.child(variable).update(vote)
            qualities.splice(qualities.indexOf(vote),1);
          }}>
            <Text style={styles.featNavButtonText}>{qualities[i]}</Text>
          </TouchableHighlight>);
      })(qualities[i])
    }
  }
}

module.exports = Featured;