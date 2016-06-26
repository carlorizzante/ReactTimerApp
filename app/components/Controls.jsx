var React = require("react");

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    console.log(this.onStatusChange);
    var renderStartStopButton = () => {
      if (countdownStatus === "started") {
        // render Pause BTN
        return (
          <button className="button secondary hollow" onClick={this.onStatusChange("paused")}>Pause</button>
        );
      } else if (countdownStatus === "paused") {
        // render Start BTN
        return (
          <button className="button primary hollow" onClick={this.onStatusChange("started")}>Start</button>
        );
      }
    };
    return (
      <div className="controls-container">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
