
'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native');
var Firebase = require('firebase');
var d3 = require('d3');

/*========================================================||
||   Locally required files                               ||
||========================================================*/

var styles = require('./styles');
var Featured = require('./Featured');
var Search = require('./Search');
var Login = require('./login');
var userID = '7725590'; // <--- A placeholder for the ID that will be captured during login
  // albrey is '714387395';
  // preston is '7725590';

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
 AppRegistry,
 Image,
 ListView,
 TabBarIOS,
 Text,
 View,
 TouchableHighlight,
 Component,
 AlertIOS,
 NavigatorIOS,
 TouchableOpacity
} = React;

/*========================================================||
||   Creates the Katfish app on top of React Native       ||
||========================================================*/

class Katfish extends Component {

 constructor(props) {
   super(props);
   this.state = null;
 }

/*========================================================||
||   The render function is native and will be called     ||
||   every time the state is changed in the app           ||
||========================================================*/

render() {
  if(this.state === null) return Login(this);
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
};
}

AppRegistry.registerComponent('Katfish', () => Katfish);
module.exports.userID = userID;