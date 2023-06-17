import React, {useState, useEffect} from "react";
import axios from "axios";

const TodoApp = () => {
    const [todos, setTodos]= useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filterCompleted, setFilterCompleted] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/1/todos'
            );
            setTodos(response.data);
        } catch (error){
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = () => {
        if(newTodo.trim() === '') {
            return;
        }

        const todo = {
            id: Date.now(),
            title: newTodo,
            completed: false,
        };
    

    setTodos((prevTodos) => [...prevTodos, todo]);
    setNewTodo('');
    };

    const toogleTodo = (id) =>{
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
        );
    };
    
    const editTodo = (id,newTitle) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
        todo.id === id ? {...todo, title: newTitle} : todo
        )
        );
    };
    
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    
    const filteredTodos = filterCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;
    
    return (
        <div>
            <h1>Todo App</h1>
            <div>
            <input 
        type="text"
        value={newTodo}
        onChange= {(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
           </div>
           <div>
            <label>
                Show completed tasks:
                <input
                type="checkbox"
                checked={filterCompleted}
                onChange={() => setFilterCompleted((prev) => !prev)}
                />
            </label>
           </div>
           <ul>
            {filteredTodos.map((todo) => (
                <li key={todo.id}>
                    <span
                    style= {{textDecoration: todo.completed ? 'line-through' : 'none'}}
                    onClick={() => toogleTodo(todo.id)}
                    >
                        {todo.title}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onClick={() => editTodo(todo.id, prompt('New title'))}>
                        Edit
                    </button>
                </li>
            ))}
           </ul>
        </div>
       
    );
            
};



export default TodoApp;