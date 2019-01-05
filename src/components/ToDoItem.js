import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.info.title}</li>
      </div>
    );
  }
}

export default ToDoItem;
