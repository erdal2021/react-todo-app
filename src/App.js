import React from 'react';
import logo from './logo.svg';
import './App.css';

function TodoList() {
  // TodoList component implementation
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meine Todo-Liste</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
      </header>
    </div>
  );
}
export default TodoList;