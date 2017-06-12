import React, {Component} from 'react'

class notCompleted extends Component {
  render() {
    return (
      <div> {this.props.todos.filter(todo => {
        if(todo.completed===false) {
          return <p> {todo.text} </p>
        }

      })}</div>
    )
  }

}
export default notCompleted
