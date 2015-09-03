/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var Firebase = require('firebase');
var d3 = require('d3');
var styles = require('./styles').style
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
 NavigatorIOS
} = React;

class Katfish extends Component {

 constructor(props) {
   super(props);
   this.state = {
     selectedTab: 'featured'
   };
 }

 render() {
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
}

AppRegistry.registerComponent('Katfish', () => Katfish);