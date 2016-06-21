var React = require("react");
var Clock = require("./Clock");

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock></Clock>
      </div>
    );
  }
});

module.exports = Countdown;
