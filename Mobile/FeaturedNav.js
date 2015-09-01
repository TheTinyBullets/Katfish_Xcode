'use strict';
 
var React = require('react-native');
 
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
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                   style={{width: 300, height: 300}} />

            <Text>WHAT</Text>
            <TouchableHighlight style={styles.button}
              onPress={this.showAlert}>
              <Text style={styles.buttonText}>Trait1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
              onPress={this.showAlert}>
              <Text style={styles.buttonText}>Trait2</Text>
            </TouchableHighlight> 
            <TouchableHighlight style={styles.button}
              onPress={this.showAlert}>
              <Text style={styles.buttonText}>Trait3</Text>
            </TouchableHighlight> 
            </View>             
        );
    }
}
 
module.exports = BookList;