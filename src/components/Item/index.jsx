import React, { Component } from "react";
import Delete from "../Delete";
import "./index.css";

export default class Item extends Component {
  checkChange = (id) => {
    return (event) => {
      console.log("id:", id, " , checked:", event.target.checked);
    };
  };
  render() {
    const { id, text, done } = this.props;
    return (
      <li className="item">
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={this.checkChange(id)}
        />
        <span>{text}</span>
        <Delete></Delete>
      </li>
    );
  }
}
