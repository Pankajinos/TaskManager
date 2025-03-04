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
                        await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/completed`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(
                                { key: todo.key, completed: todo.done }
                            ),
                        });
                        const res = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/todos`);
                        const json = await res.json();
                        setTodo(json);
                    }}>

                    <img
                        src={todo.done ? checked : unchecked}
                        alt={todo.done ? "Completed" : "Mark as done"}
                        width="30"
                        height="30"
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <h1 className=
                    {`todo-title ${todo.done ? "completed" : ""}`}
                >{todo.title}</h1>
            </div>
            <button onClick={async () => {
                fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/delete`,
                    { method: "PUT", body: JSON.stringify({ key: todo.key }), headers: { "Content-Type": "application/json" } }
                ).then(() => {
                    fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/todos`).then(async (res) => {
                        const json = await res.json();
                        setTodo(json);
                    })
                })
            }}>Delete</button>
        </div>

    )
}

export default Todo