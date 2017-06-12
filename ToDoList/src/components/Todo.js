import React, {Component} from 'react'

class Todo extends Component {
  render() {
    return (
      (this.props.todo.completed)? <strike>{this.props.todo.text}</strike> : <span>{this.props.todo.text}</span>
    )
  }
}

export default Todo
