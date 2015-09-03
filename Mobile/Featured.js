'use strict';

var React = require('react-native');
var FeatNav = require('./FeaturedNav');

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

class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'React',
            component: FeatNav
            }}/>
        );
    }
}

module.exports = Featured;