var React = require("react"),
    ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");
var Main = require("./components/Main");

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// Load style
require("style!css!sass!./style/app.scss");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
    document.getElementById("app")
);
