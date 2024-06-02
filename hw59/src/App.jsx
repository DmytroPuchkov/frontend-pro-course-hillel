import React, { useState } from 'react'
import './App.css'

const App = () => {
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
      <ul className='caveat'>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {index + 1}. {todo.text}
          </li>
        ))}
      </ul>
      <div className="add">
        <input
          className='input caveat'
          placeholder='Що вам треба зробити?'
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='btn caveat' onClick={addTodo}>Додати</button>
      </div>
        <button className='btn btn-clear caveat' onClick={clearCompleted}>Видалити всі зроблені справи</button>
    </div>
  )
}

export default App;