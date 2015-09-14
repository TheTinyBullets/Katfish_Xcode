'use strict';

/*========================================================||
||   External required sources                            ||
||========================================================*/

var React = require('react-native'),
  Firebase = require('firebase'),
  person = require('./PersonDB');

/*========================================================||
||   Locally required sources                             ||
||========================================================*/

var styles = require('./styles'),
  MoreNav = require('./MoreNav');

/*========================================================||
||   React native variables, used like HTML tags          ||
||========================================================*/

var {
    NavigatorIOS,
    Component
   } = React;


/*========================================================||
||   Adds the More view on top of Katfish                 ||
||========================================================*/

class More extends Component {
    render() {
      console.log()
        return (
            <NavigatorIOS
              style={styles.moreContainer}
              initialRoute={{
                title: window.Katfish.userName,
                component: MoreNav
            }}/>
        );
    };
}

module.exports = More;