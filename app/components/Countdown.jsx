var React = require("react");
var Clock = require("./Clock");
var CountdownForm = require("./CountdownForm");
var Controls = require("./Controls");

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: "stopped"
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case "started":
          this.startTimer();
          // console.log("Timer starts...", this.state.count);
          break;

        default:
          // Do nothing
          break;
      }
    }
    // if (this.state.count == 0) {
    //   clearInterval(this.timer);
    //   console.log("Timer stopped at 0.");
    // }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      // console.log("Timer running...", newCount);
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (this.state.count == 0) {
        clearInterval(this.timer);
        this.state.countdownStatus = "stopped";
        // console.log("Timer stopped at 0.");
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: "started"
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
        <Controls />
      </div>
    );
  }
});

module.exports = Countdown;
