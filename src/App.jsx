import React, { Component } from "react";
import Add from "./components/Add";
import List from "./components/List";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: uuidv4(), text: "晨读一个小时", done: true },
      { id: uuidv4(), text: "编码两个小时", done: false },
      { id: uuidv4(), text: "喝酒烫头", done: true },
    ],
  };

  addTodo = (text) => {
    const { todoList } = this.state;
    const newItem = { id: uuidv4(), text, done: false };
    this.setState({ todoList: [newItem, ...todoList] });
  };

  deleteTodo = (id) => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((item) => item.id !== id);
    this.setState({ todoList: newTodoList });
  };

  updateTodo = (id, obj) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) => {
      if (item.id === id) return { ...item, ...obj };
      return item;
    });
    this.setState({ todoList: newTodoList });
  };

  toggleAll = (flag) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) =>
      Object.assign({}, item, { done: flag })
    );
    this.setState({ todoList: newTodoList });
  };

  clearDone = () => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter((item) => !item.done);
    this.setState({ todoList: newTodoList });
  };

  render() {
    let { todoList } = this.state;
    return (
      <div className="app">
        <div className="todo-list">
          <Add addTodo={this.addTodo}></Add>
          <List
            todos={todoList}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
          ></List>
          <Footer
            todos={todoList}
            toggleAll={this.toggleAll}
            clearDone={this.clearDone}
          ></Footer>
        </div>
      </div>
    );
  }
}
