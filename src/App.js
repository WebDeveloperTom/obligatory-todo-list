import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

class App extends Component {
  state = {
    todoItems: [
      {
        id: 1,
        title: "Make a list",
        complete: false
      },
      {
        id: 2,
        title: "Cross stuff off",
        complete: true
      },
      {
        id: 3,
        title: "Take a nap",
        complete: false
      }
    ]
  };
  handleClick = id => {
    const statecopy = this.state.todoItems;
    this.setState({
      todoItems: statecopy.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div>
        <h1>Todolist</h1>
        <input type="text" />
        {this.state.todoItems.map(item => {
          return (
            <ToDoItem
              key={item.id}
              info={item}
              handleClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
