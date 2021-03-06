var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var Controls = require("Controls");

describe("Controls", () => {
  it("should exist", () => {
    expect(Controls).toExist();
  });

  var fn = function () {}; // Empty fn, required by Control for onStatusChange property

  describe("render", () => {
    it("should render pause btn when started", () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="started" onStatusChange={fn}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseBtn = $el.find('button:contains(Pause)');
      expect($pauseBtn.length).toBe(1);
    });

    it("should render start btn when paused", () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="paused" onStatusChange={fn}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startBtn = $el.find('button:contains(Start)');
      expect($startBtn.length).toBe(1);
    });
  });
});
