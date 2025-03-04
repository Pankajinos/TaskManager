import React from 'react'
import Todo from './Todo'

function CompletedTodos({ todos, setTodo }) {
  const completdTodos = todos.filter(todo => todo.done);
  return (
      <div>
          {completdTodos.length>0 && <h1>Completed Tasks</h1>}
          {
              completdTodos.map((todo, key) => {
                return <Todo todo={todo} setTodo={setTodo}/>
              })
          }
    </div>
  )
}

export default CompletedTodos