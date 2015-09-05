'use strict';

var React = require('react-native'),
  personID = require('./PersonDB');

var {
   StyleSheet,
   View,
   Text,
   Image,
   TouchableHighlight,
   Component
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
   },
   buttonText: {
     fontSize: 18,
     color: 'white',
     alignSelf: 'center'
   },
   button: {
     height: 44,
     flexDirection: 'column',
     backgroundColor: '#48BBEC',
     alignSelf: 'stretch',
     justifyContent: 'center'
   }
});

class BookList extends Component {
   render() {
       return (
           <View style={styles.container}>
           <Image source={{uri: 'http://graph.facebook.com/' + personID + '/picture?type=large'}}
                  style={{width: 200, height: 200}} />
           <Text> </Text>
           <TouchableHighlight style={styles.button}
             onPress={this.showAlert}>
           <Text style={styles.buttonText}>Baller</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.button}
             onPress={this.showAlert}>
             <Text style={styles.buttonText}>Brave</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.button}
             onPress={this.showAlert}>
             <Text style={styles.buttonText}>Calm</Text>
           </TouchableHighlight>
           </View>
       );
   }
}

module.exports = BookList;