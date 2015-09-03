/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';


var React = require('react-native');
var Firebase = require('firebase');
var d3 = require('d3');
var styles = require('./styles')
// var canvas = require('canvas');

var Featured = require('./Featured');
var Search = require('./Search');

var {
 AppRegistry,
 Image,
 ListView,
 StyleSheet,
 TabBarIOS,
 Text,
 View,
 TouchableHighlight,
 Component,
 AlertIOS,
 NavigatorIOS,
 TouchableOpacity
} = React;


class Katfish extends Component {

 // constructor(props) {
 //   super(props);
 //   this.state = {
 //     selectedTab: 'featured'
 //   };
 // }

  _handlePress() {
    this.state
  }

  render(opt) {
    if(!opt) return this._renderOption('x');
    return this._renderOption();
  }

  _renderOption(option){
    if( !option ){
      return (
        <TabBarIOS
        selectedTab={this.state.selectedTab}
         tintColor={'#FFF'}
         barTintColor={'#48BBEC'}
         translucent={'true'}>
         <TabBarIOS.Item
         selected={this.state.selectedTab === 'featured'}
         icon={{uri:'featured'}}
         onPress={() => {
           this.setState({
             selectedTab: 'featured'
           });
         }}>
         <Featured/>
         </TabBarIOS.Item>
         <TabBarIOS.Item
         selected={this.state.selectedTab === 'search'}
         icon={{uri:'search'}}
         onPress={() => {
           this.setState({
             selectedTab: 'search'
           });
         }}>
         <Search/>
         </TabBarIOS.Item>
         </TabBarIOS>
      )
  }
  return (
    <View style={[styles.container, {backgroundColor: 'green'}]}>
    <Text style={styles.welcome}></Text>
    <TouchableOpacity onPress={this._handlePress}>
    <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
    <Text style={styles.welcome}>Go to page two</Text>
    </View>
    </TouchableOpacity>
    </View>
    )
  }

}



AppRegistry.registerComponent('Katfish', () => Katfish);