import React, { Component } from "react";

class ToDoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.info.complete ? "line-through" : "none"
    };
  };
  render() {
    const { handleClick, remove } = this.props;
    return (
      <div className="todoItem">
        <label onClick={handleClick.bind(this, this.props.info.id)}>
          <li style={this.getStyle()}>{this.props.info.title}</li>
        </label>
        <span
          className="remove"
          onClick={remove.bind(this, this.props.info.id)}
        >
          X
        </span>
      </div>
    );
  }
}

export default ToDoItem;
