import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.less";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Link to="/todo/list/simple">TodoList 简单版本</Link>
        <Link to="/todo/list/redux">TodoList Redux版本</Link>
      </div>
    );
  }
}
