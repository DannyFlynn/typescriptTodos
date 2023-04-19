type TodoProps = {
    id: number;
    msg?: string;
    complete?: boolean;
    deleteTodo: (id: number) => void;
    todoComplete: (id: number) => void;
}
const Todo = ({ id, msg, complete, deleteTodo, todoComplete }: TodoProps) => {



    return (
        <div>
            <span style={{ textDecoration: complete ? 'line-through' : 'none' }}>{msg}</span>
            <button onClick={() => deleteTodo(id)}>delete</button>
            <button onClick={() => todoComplete(id)}>Complete</button>
        </div>
    )
}

export default Todo