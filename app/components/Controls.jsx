var React = require("react");

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = function () {
      if (countdownStatus === "started") {
        // pause btn
        return (
          <button className="button secondary hollow">Pause</button>
        );
      } else if (countdownStatus === "paused") {
        // start btn
        return (
          <button className="button primary hollow">Start</button>
        );
      }
    };
    return (
      <div className="controls-container">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
