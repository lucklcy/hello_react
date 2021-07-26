import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "td100001", text: "晨读一个小时", done: true },
      { id: "td100002", text: "编码两个小时", done: false },
      { id: "td100003", text: "喝酒烫头", done: true },
    ],
  };
  getTodoItem = (text) => {
    const { todoList } = this.state;
    const newItem = { id: uuidv4(), text, done: false };
    this.setState({ todoList: [...todoList, newItem] });
  };
  render() {
    let { todoList } = this.state;
    return (
      <div className="app">
        <div className="todo-list">
          <Add addTodo={this.getTodoItem}></Add>
          <List todos={todoList}></List>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
