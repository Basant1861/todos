import React, {Component} from 'react'

class all extends Component {
  render() {
    return(
      <div> {this.props.todos.map(todo => {
       return <p> {todo.text} </p>
     })}</div>
    )
  }


  }

export default all
