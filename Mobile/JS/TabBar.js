var React = require('react-native');
var Featured = require('./Featured');
var Search = require('./Search');
var More = require('./More')

var {
  TabBarIOS,
}=React

module.exports = function (){
  return(
    <TabBarIOS
      selectedTab={window.Katfish.state.selectedTab}
      tintColor={'#FFF'}
      barTintColor={'#48BBEC'}
      translucent={'true'}>
      <TabBarIOS.Item
        selected={window.Katfish.state.selectedTab === 'featured'}
        icon={require('image!friends')}
        onPress={() => {
        window.Katfish.setState({
        selectedTab: 'featured'
     });
    }}>
      <Featured/>
    </TabBarIOS.Item>
    <TabBarIOS.Item
      selected={window.Katfish.state.selectedTab === 'search'}
      icon={require('image!graph')}
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