var React = require("react");

var Controls = React.createClass({
  propTypes: {
    clockStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  componentWillReceiveProps: function (newProps) {
    // demo purposes
  },
  render: function () {
    var {clockStatus} = this.props;
    var renderStartStopButton = () => {
      if (clockStatus === "started") {
        // render Pause BTN
        return (
          <button className="button secondary hollow" onClick={this.onStatusChange("paused")}>Pause</button>
        );
      } else if (clockStatus === "paused") {
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
