var React = require('react-native');
var main = require('./index.ios')
var styles = require('./styles');

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
 TouchableOpacity,
 Featured,
 Search
} = React;

var handlePress = function() {
    //this will be filled with the logic to get the Facebook login
    //included should be the FB userID
    //main.userID = '12345678'
    this.setState ({
     selectedTab: 'featured'
   })
  }

module.exports.renderOption = function(option){ // <-------- this is called to decide which render to use
/*========================================================||
||   View to render when the user has ALREADY logged in   ||
||========================================================*/

if( option.state ){
  console.log(option)
  return (
    <TabBarIOS
    selectedTab={option.state.selectedTab}
    tintColor={'#FFF'}
    barTintColor={'#48BBEC'}
    translucent={'true'}>
    <TabBarIOS.Item
    selected={option.state.selectedTab === 'featured'}
    icon={{uri:'featured'}}
    onPress={() => {
     this.setState({
       selectedTab: 'featured'
     });
   }}>
   <Featured/>
   </TabBarIOS.Item>
   <TabBarIOS.Item
   selected={option.state.selectedTab === 'search'}
   icon={{uri:'search'}}
   onPress={() => {
     option.setState({
       selectedTab: 'search'
     });
   }}>
   <Search/>
   </TabBarIOS.Item>
   </TabBarIOS>
   )
}
/*========================================================||
||   View to render when user should log in               ||
||========================================================*/

return (
  <View style={[styles.container]}>
  <Image
  style={styles.backgroundImage}
  source={require('./bgImage.png')}
  />
  <Text style={styles.welcome}></Text>
  <TouchableOpacity
  onPress={handlePress.bind(option)}
  dataSource={option}
  >
  <Image
  source={require('./fblogin.png')}
  style={styles.button}
  />
  </TouchableOpacity>
  </View>
  )
}