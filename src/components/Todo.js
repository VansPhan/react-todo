import React, {Component} from 'react'

class Todo extends Component {
  render(){
    return(
      <div data-todos-index={this.props.todo.id}>
        <h1>{this.props.todo.title}</h1>
        <p>{this.props.todo.summary}</p>
      </div>
    )
  }
}

export default Todo