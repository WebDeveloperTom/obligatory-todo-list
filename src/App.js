import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

class App extends Component {
  state = {
    todoItems: [
      {
        title: "Make a list",
        complete: false
      },
      {
        title: "Cross stuff off",
        complete: true
      },
      {
        title: "Take a nap",
        complete: false
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Todolist</h1>
        {this.state.todoItems.map(item => {
          return <ToDoItem info={item} />;
        })}
      </div>
    );
  }
}

export default App;
