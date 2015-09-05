'use strict';
/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
var styles = require('./styles');
var personID = require('./PersonDB');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 View,
 Text,
 Image,
 TouchableHighlight,
 Component
} = React;

/*========================================================||
||   Adds the FeaturedNav view on top of Katfish          ||
||========================================================*/

class Featured extends Component {
 render() {
   return (
     <View style={styles.container}>
     <Image source={{uri: 'http://graph.facebook.com/' + personID + '/picture?type=large'}}
     style={{width: 300, height: 300}} />
     <Text> </Text>
     <TouchableHighlight style={styles.featNavButton}
     onPress={this.showAlert}>
     <Text style={styles.featNavButtonText}>Baller</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.featNavButton}
     onPress={this.showAlert}>
     <Text style={styles.featNavButtonText}>Brave</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.featNavButton}
     onPress={this.showAlert}>
     <Text style={styles.featNavButtonText}>Calm</Text>
     </TouchableHighlight>
     </View>
     );
 }
}

module.exports = Featured;