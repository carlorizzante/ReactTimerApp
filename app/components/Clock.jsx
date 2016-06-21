var React = require("react");

var Clock = React.createClass({
  formatSeconds: function (time) {
    var seconds = time % 60;
    var minutes = Math.floor(time / 60);
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    return minutes + ":" + seconds;
  },
  render: function () {
    return (
      <div>
        <h3>Clock.jsx</h3>
      </div>
    );
  }
});

module.exports = Clock;
