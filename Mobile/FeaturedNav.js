'use strict';
/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  styles = require('./styles'),
  personID = require('./PersonDB');

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
||   Thumbs for scroll view sample.....                   ||
||========================================================*/

// var Thumb = React.createClass({
//   shouldComponentUpdate: function(nextProps, nextState) {
//     return false;
//   },
//   render: function() {
//     return (
//       <View style={styles.button}>
//         <Image style={styles.img} source={{uri:this.props.uri}} />
//       </View>
//     );
//   }
// });

// var THUMBS = ['http://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
// THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
// var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

/*========================================================||
||   Adds the FeaturedNav view on top of Katfish          ||
||========================================================*/

class Featured extends Component {
 render() {
   return (
     <View style={styles.featNavContainer}>
     <Image source={{uri: 'http://graph.facebook.com/' + personID + '/picture?type=large'}}
     style={{width: 200, height: 200, borderRadius: 100}} />
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