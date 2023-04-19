import { useState } from 'react';
import Todo from './Todo';

type TodosProps = {
    id: number;
    msg: string;
    complete: boolean;
}


const Todos = () => {

    const [todos, setTodos] = useState<TodosProps[]>([]);
    const [input, setInput] = useState<string>("");



    const addTodos = () => {
        if (input !== "") {
            const newTodo = {
                id: Math.floor(Math.random() * 300),
                msg: input,
                complete: false,
            }
            setTodos(prev => [...prev, newTodo])
            setInput("")
        }
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const todoComplete = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete }
            } else {
                return todo
            }
        }))
    }

    return (
        <div>
            <h1>Todos</h1>
            <div>
                <input type="text"
                    placeholder="add todo"
                    value={input}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
                <button onClick={addTodos}>Add</button>
            </div>
            {todos.map((todo) => (
                <Todo {...todo} key={todo.id} deleteTodo={deleteTodo} todoComplete={todoComplete} />
            ))}

        </div>
    )
}

export default Todos