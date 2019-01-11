import React, { Component } from "react";

class ToDoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.info.complete ? "line-through" : "none"
    };
  };
  render() {
    const { handleClick } = this.props;
    return (
      <label onClick={handleClick.bind(this, this.props.info.id)}>
        <li style={this.getStyle()}>{this.props.info.title}</li>
      </label>
    );
  }
}

export default ToDoItem;
