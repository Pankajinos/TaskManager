import Todo from "./Todo";

export function Todos({ todos, setTodo }) {
    return (
        <div>
            {
                todos.filter(todo=>!todo.done)
                .map((todo) => {
                    return(
                    <Todo todo={todo} setTodo={setTodo} />
                    );
                })
            }
        </div>
    );
}