const AddTodo = ({ newTodo, setNewTodo, addTodo }) => (
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
)

export default AddTodo