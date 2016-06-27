var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Countdown = require("Countdown");

describe("Countdown", () => {
  it("should exist", () => {
    expect("Countdown").toExist();
  });

  var countdown = TestUtils.renderIntoDocument(<Countdown />);
  countdown.handleSetCountdown(2);

  describe("handleSetCountdown", () => {
    it("should set state and start counting down to zero", (done) => {
      expect(countdown.state.count).toBe(2);
      expect(countdown.state.clockStatus).toBe("started");
      setTimeout(() => {
        expect(countdown.state.count).toBe(1);
        done();
      }, 1001);
    });

    it("should set state to stopped once count reaches zero", (done) => {
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.clockStatus).toBe("stopped");
        done();
      }, 2100);
    });

    it("should never set count less than zero", (done) => {
      setTimeout(() => {
        expect(countdown.state.count).toBeGreaterThanOrEqualTo(0);
        done();
      }, 4100);
    });

    it("should maintain status (paused) when paused", (done) => {
      countdown.handleSetCountdown(2); // restart countdown
      countdown.handleStatusChange("paused"); // pause countdown (set status to paused)
      setTimeout(() => {
        expect(countdown.state.count).toBe(2);
        expect(countdown.state.clockStatus).toBe("paused");
        done();
      }, 1001);
    });

    it("should reset count when stopped", (done) => {
      countdown.handleSetCountdown(3); // restart countdown
      countdown.handleStatusChange("stopped"); // stop countdown
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.clockStatus).toBe("stopped");
        done();
      }, 1001);
    });
  });
});
