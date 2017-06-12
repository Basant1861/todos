import React, {Component} from 'react'

class completed extends Component {
  render() {
    return (
      <div> {this.props.todos.filter(todo => {
        if(todo.completed===true) {
          return <p> {todo.text} </p>
        }

      })}</div>
    )
  }

}

export default completed
