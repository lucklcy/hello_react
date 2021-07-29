import React, { Component } from "react";
import styles from "./App.module.less";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import routers from "./config/routers";
import Layout from "~/Base/Layout";

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Layout
          content={
            <Router>
              <Switch>
                {routers.map((item) => (
                  <Route {...item} key={item.path}></Route>
                ))}
                <Redirect to="/home" />
              </Switch>
            </Router>
          }
        ></Layout>
      </div>
    );
  }
}
