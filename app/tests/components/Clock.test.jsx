var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

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
});
