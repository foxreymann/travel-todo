import React, { Component } from 'react';

export default class Todo extends Component {

  addTodo = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="Todo">
        <h3>My Todo List</h3>
      <form onSubmit={this.addTodo}>
        <input type="text" ref="todo" placeholder="Add a todo..."/>
        <button type="submit">Add</button>
      </form>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
      </div>
    )
  }
}


