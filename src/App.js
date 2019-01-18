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
    ],
    inputValue: ""
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
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted!");
    const newId = Math.floor(Math.random() * 100);
    const newTodo = {
      id: newId,
      title: this.state.inputValue,
      complete: false
    };
    let newState = this.state.todoItems.slice();
    newState.push(newTodo);
    this.setState({
      todoItems: newState,
      inputValue: ""
    });
  };
  remove = id => {
    console.log(`This id ${id} will be removed`);
    const statecopy = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: statecopy });
  };

  reset = () => {
    this.setState({
      todoItems: []
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Todolist</h1>
        <div className="listContainer">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.inputValue}
              placeholder="Let's get stuff done!"
            />
          </form>
          <div className="list">
            {this.state.todoItems.map(item => {
              return (
                <ToDoItem
                  key={item.id}
                  info={item}
                  handleClick={this.handleClick}
                  remove={this.remove}
                />
              );
            })}
          </div>
        </div>
        <button onClick={this.reset}>Reset List</button>
      </div>
    );
  }
}

export default App;
