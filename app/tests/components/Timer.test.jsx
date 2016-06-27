var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Timer = require("Timer");

describe("Timer", () => {
  it("should exist", () => {
    expect(Timer).toExist();
  });

  var timer = TestUtils.renderIntoDocument(<Timer />);

  describe("handleStartTimer", () => {

    it("should start timer at started status and counting", (done) => {
      timer.handleStartTimer();
      expect(timer.state.clockStatus).toBe("started");
      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.clockStatus).toBe("started");
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it("should maintain status (paused) when paused", (done) => {
      var count = timer.state.count;
      timer.handleStatusChange("paused");
      setTimeout(() => {
        var newCount = timer.state.count;
        expect(newCount).toBe(count);
        expect(timer.state.clockStatus).toBe("paused");
        done();
      }, 1001);
    });

    it("should reset count when stopped", (done) => {
      timer.handleStatusChange("stopped");
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.clockStatus).toBe("stopped");
        done();
      }, 1001);
    });
  });
});
