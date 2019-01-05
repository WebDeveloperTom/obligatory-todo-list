import React, { Component } from "react";

class ToDoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.info.complete ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div>
        <li style={this.getStyle()}>{this.props.info.title}</li>
      </div>
    );
  }
}

export default ToDoItem;
