var React = require("react");
var Clock = require("./Clock");

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <Clock></Clock>
      </div>
    );
  }
});

module.exports = Timer;
