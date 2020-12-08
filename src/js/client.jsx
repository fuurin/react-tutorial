import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import Featured from "./pages/Featured.jsx";
import Archives from "./pages/Archives.jsx";
import Settings from "./pages/Settings.jsx";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Featured}></Route>
      <Route exact path="/archives" component={Archives}></Route>
      <Route path="/archives/:article" component={Archives}></Route>
      <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
    </Layout>
  </Router>,
app);
