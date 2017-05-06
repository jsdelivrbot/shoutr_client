import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app";
import ShoutsIndex from "./components/shouts_index"
import ShoutsShow from "./components/shouts_show";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ShoutsIndex} />
    <Route path="shouts" component={ShoutsIndex} />
    <Route path="shouts/:id" component={ShoutsShow} />
  </Route>
)