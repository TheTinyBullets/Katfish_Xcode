// Function.prototype.bind = require('require-bind');
// var React = require('react');

// module.exports = React.createClass({
//   render: function(){
//     return React.createElement.
//   }
// })

var test = require('tape');
Function.prototype.bind = require('require-bind');
var React = require('react');
var TestUtils = React.addons.TestUtils;

var TestComponent = require('./component.js');

var shallowRenderer = TestUtils.createRenderer();

// insert call
shallowRenderer.render(React.createElement(TestComponent, null));

var component = shallowRenderer.getRenderOutput();

test("React component", function(t){
  t.plan(1);

  t.equal(component.type, 'div', 'should render a div');
});