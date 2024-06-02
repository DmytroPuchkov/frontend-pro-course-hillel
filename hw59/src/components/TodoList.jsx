const TodoList = ({ todos, toggleTodo }) => (
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
)

export default TodoList