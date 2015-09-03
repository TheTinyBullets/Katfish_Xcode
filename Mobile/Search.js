'use strict';
 
var React = require('react-native');
var SearchNav = require('./SearchNav');
 
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Casey',
            component: SearchNav
            }}/>            
        );
    }
}
 
module.exports = Search;