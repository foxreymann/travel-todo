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

  complete(id) {
    const todos = this.state.todos.map(td => ({ ...td, completed: td.id === id ? true : td.completed }))

    this.setState({ todos })
  }

  render() {
    return (
      <div className="Todo">
        <h3>{this.props.title}</h3>
      <form onSubmit={this.addTodo}>
        <input type="text" ref="todo" placeholder="Add a todo..."/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {
          this.state.todos.map(t =>
            <li
              key={t.id}
              onClick={() => this.complete(t.id)}
              className={t.completed ? 'completed todo' : 'todo'}
            >
              {t.todo}
            </li>
          )
        }
      </ul>
      </div>
    )
  }
}
