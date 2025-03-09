import { useState } from "react"
import { Todos } from "./Todos";
import '../App.css'


export function CreateTodo({ setTodo }) {
    const [title, setTitle] = useState("");
    return <div>
        <input type="text" id="heading" placeholder="Heading" onChange={(e) => { setTitle(e.target.value) }} />
        <button onClick={() => {
            fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/todo`, { method: "POST", body: JSON.stringify({ title: title, key: JSON.stringify(Date.now()) }), headers: { "Content-Type": "application/json" } })
                .then(async (res) => {
                    if (!res.ok) {
                        const json = await res.json();
                        alert(json.msg);
                    }
                    document.querySelector("#heading").value = '';
                    setTitle("");
                    fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/todos`).then(async (res) => {
                        const json = await res.json();
                        setTodo(json);
                    })
                })


        }}>Add TODO</button>
    </div>
}