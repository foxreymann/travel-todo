import React, { Component } from 'react';

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: this.state.todos.length,
      todo: this.refs.todo.value,
      completed: false
    }
    this.refs.todo.value = ''
    this.setState({todos: [...this.state.todos, newTodo]})
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
        {
          this.state.todos.map(t =>
            <li key={t.id} onClick={() => this.complete(t.id)}>
              {t.todo}
            </li>
          )
        }
      </ul>
      </div>
    )
  }
}
