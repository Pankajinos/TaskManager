import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'
import CompletedTodos from './components/CompletedTodos';


function App() {
  const [todos, setTodo] = useState([]);
  //if we drirectly do setTodo then setTodo will rerender app and app will rerender setTodo means a infinite loop
  //useEffects setTodo only once
  useEffect(() => {
    fetch("http://localhost:1000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodo(json);
      })
  },
    []);
  return (
    <div class='container'>
      <h1 class='header'>Task Manager</h1>
      <CreateTodo setTodo={setTodo} />
      <Todos todos={todos} setTodo={setTodo}></Todos>
      <CompletedTodos todos={todos} setTodo={setTodo}></CompletedTodos>
    </div>
  )


}

export default App
