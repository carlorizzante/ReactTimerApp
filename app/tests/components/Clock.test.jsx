var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Clock = require("Clock");

describe("Clock", () => {
  it("should exist", () => {
    expect(Clock).toExist();
  });

  var clock = TestUtils.renderIntoDocument(<Clock />);

  describe("formatSeconds", () => {
    it("should format seconds", () => {
      // var clock = TestUtils.renderIntoDocument(<Clock />);
      var time = 615;
      var expected = "10:15";
      var actual = clock.formatSeconds(time);
      expect(actual).toBe(expected);
    });
  });

  describe("formatSeconds 2", () => {
    it("should format seconds", () => {
      // var clock = TestUtils.renderIntoDocument(<Clock />);
      var time = 62;
      var expected = "01:02";
      var actual = clock.formatSeconds(time);
      expect(actual).toBe(expected);
    });
  });

  describe("render", () => {
    it("should render clock to output", () => {
      var time = 62;
      var expected = "01:02";
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={time}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actual = $el.find(".clock-timer").text();
      expect(actual).toBe(expected);
    });
  });

});
