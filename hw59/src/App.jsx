import React, { useState } from 'react'
import './App.css'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import ClearCompleted from './components/ClearCompleted'

function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([{ text: newTodo, completed: false }, ...todos])
      setNewTodo('')
    }
  }

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <div className='todo caveat'>
      <h1>Перелік справ</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ClearCompleted clearCompleted={clearCompleted} />
    </div>
  )

}

export default App;
