var React = require("react");
var {Link, IndexLink} = require("react-router");

require("style!css!sass!./_nav.scss");

var Nav = React.createClass({
  render: function () {
    return (
      <nav id="site-navigation" className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><IndexLink to="/" activeClassName="active-menu-link">React Timer App</IndexLink></li>
            <li><Link to="/" activeClassName="active-menu-link">Timer</Link></li>
            <li><Link to="/" activeClassName="active-menu-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>by <a href="http://carlorizzante.com">Carlo Rizzante</a></li>
          </ul>
        </div>
      </nav>
    );
  }
})

module.exports = Nav;
