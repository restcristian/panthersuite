import React from "react";
import Layout from "./Layout/Layout";
import { Switch, Route, Link } from "react-router-dom";
import withSiteDataLoad from "../components/hoc/withSiteDataLoad";

import Home from "../pages/Home/Home";
import Concerts from "../pages/Concerts/Concerts";
import Contact from "../pages/Contact/Contact";

class App extends React.Component {
  componentDidMount() {
    console.log("finished rendering");
  }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/concerts" component={Concerts} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    );
  }
}

export default withSiteDataLoad(App);
