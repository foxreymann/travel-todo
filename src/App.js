import React, { Component } from 'react'
import './App.css'
import Todo from './Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Holiday Checklists!</h1>
          <p>The goto place for all your holiday todo lists</p>
        </header>
        <Todo />
        <Todo />
      </div>
    )
  }
}

export default App
