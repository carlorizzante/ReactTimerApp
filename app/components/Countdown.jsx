var React = require("react");
var Clock = require("./Clock");
var CountdownForm = require("./CountdownForm");
var Controls = require("./Controls");

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      clockStatus: "stopped"
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.clockStatus !== prevState.clockStatus) {
      switch(this.state.clockStatus) {

        case "started":
          this.startTimer();
          // console.log("Timer starts...", this.state.count);
          break;

        case "stopped":
          this.setState({
            count: 0
          });
          // Falls to the next case

        case "paused":
          clearInterval(this.timer);
          this.timer = null;
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
  componentWillMount: function () {
    // console.log("Countdown component will mount.");
  },
  componentDidMount: function () {
    // console.log("Countdown component did mount.");
  },
  componentWillUpdate: function (nextProps, nextState) {
    // console.log("Countdown component will update with", nextProps, nextState);
  },
  componentWillUnmount: function () {
    // console.log("Countdown component did unmount.");
    this.setState({
      count: 0
    });
    clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      // console.log("Countdown running...", newCount);
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (this.state.count == 0) {
        clearInterval(this.timer);
        this.state.clockStatus = "stopped";
        // console.log("Timer stopped at 0.");
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      clockStatus: "started"
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      clockStatus: newStatus
    });
  },
  render: function () {
    var {count, clockStatus} = this.state;
    var renderControlArea = () => {
      if (clockStatus !== "stopped") {
        return (<Controls clockStatus={clockStatus} onStatusChange={this.handleStatusChange} />);
      } else {
        return (<CountdownForm onSetCountdown={this.handleSetCountdown} />);
      }
    };
    return (
      <div>
        <h2 className="page-title">Countdown</h2>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
