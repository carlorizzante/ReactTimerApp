var React = require("react");
var Clock = require("./Clock");
var TimerForm = require("./TimerForm");
var Controls = require("./Controls");

var Timer = React.createClass({
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
          // console.log("Timer started");
          this.startTimer();
          break;

        case "stopped":
          // console.log("Timer reset");
          this.setState({
            count: 0
          });

        case "paused":
          // console.log("Timer paused");
          clearInterval(this.timer);
          this.timer = null;
          break;

        default:
          // Do nothing
          break;
      }
    }
  },
  componentWillUnmount: function () {
    // console.log("Timer component will unmount");
    this.setState({
      count: 0
    });
    clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  handleStartTimer: function () {
    this.setState({
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
        return (<TimerForm onStartTimer={this.handleStartTimer} />);
      }
    };
    return (
      <div>
        <h2 className="page-title">Timer</h2>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
