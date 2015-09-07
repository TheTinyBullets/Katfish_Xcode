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
||   Adds the FeaturedNav view on top of Katfish          ||
||========================================================*/

var indents = [],
  qualities = ["baller","leader","performer","teacher","romantic","analytical","brave","counseling","confident","creative","dynamic","driven","extroverted","flirty","mysterious","grounded","artsy","dreamer","funny","smart","careful","calm","decisive","reliable","thoughtful","loyal","sincere","versatile","understanding","independent","honest","kind"]
for (var i = 0; i < qualities.length; i++) {
  indents.push(
    <TouchableHighlight
        style={styles.featNavButton}
        onPress={this}>
      <Text style={styles.featNavButtonText}>{qualities[i]}</Text>
    </TouchableHighlight>
  );
}

class Featured extends Component {
  render() {
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
}

module.exports = Featured;