import React from 'react'
import '../App.css'
import { checked, unchecked } from '../assets/icons'
function Todo({ todo, setTodo }) {
    return (
        <div className='todo-container' >
            <div class='title-div'>
                <div
                    onClick={async () => {
                        console.log("Sending key:", todo.done);
                        await fetch("http://localhost:1000/completed", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(
                                { key: todo.key, completed: todo.done }
                            ),
                        });
                        const res = await fetch("http://localhost:1000/todos");
                        const json = await res.json();
                        setTodo(json);
                    }}>

                    <img
                        src={todo.done ? checked : unchecked}
                        alt={todo.done ? "Checked" : "Unchecked"}
                        width="30"
                        height="30"
                        onClick={() => toggleTodo(todo.key)}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <h1 className=
                    {`todo-title ${todo.done ? "completed" : ""}`}
                >{todo.title}</h1>
            </div>
            <button onClick={async () => {
                fetch("http://localhost:1000/delete",
                    { method: "PUT", body: JSON.stringify({ key: todo.key }), headers: { "Content-Type": "application/json" } }
                ).then(() => {
                    fetch("http://localhost:1000/todos").then(async (res) => {
                        const json = await res.json();
                        setTodo(json);
                    })
                })
            }}>Delete</button>
        </div>

    )
}

export default Todo