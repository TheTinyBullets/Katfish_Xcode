/*========================================================||
||   Tab bar is the bottom screen and buttons             ||
||========================================================*/

var React = require('react-native'),
  Featured = require('./Featured'),
  Search = require('./Search'),
  More = require('./More');

var {
  TabBarIOS,
} = React

module.exports = function (){
  return(
    <TabBarIOS
      selectedTab={window.Katfish.state.selectedTab}
      tintColor={'#48BBEC'}
      barTintColor={'#FFF'}
      translucent={'true'}>
      <TabBarIOS.Item
        selected={window.Katfish.state.selectedTab === 'featured'}
        icon={require('image!vote')}
        onPress={() => {
        window.Katfish.setState({
        selectedTab: 'featured'
     });
    }}>
      <Featured/>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      selected={window.Katfish.state.selectedTab === 'search'}
      icon={require('image!friends')}
      onPress={() => {
      window.Katfish.setState({
       selectedTab: 'search'
      });
    }}>
    <Search/>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      selected={window.Katfish.state.selectedTab === 'more'}
      icon={require('image!profile')}
      onPress={() => {
      window.Katfish.setState({
       selectedTab: 'more'
      });
    }}>
    <More/>
    </TabBarIOS.Item>
   </TabBarIOS>
   )
}