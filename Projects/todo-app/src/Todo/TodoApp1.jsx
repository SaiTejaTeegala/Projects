import React,{useState} from 'react';
import TodoList1 from './TodoList1';
import './Todo1.css';

const TodoApp1 =() => {
    const[task,setTask]= useState("");
    const[todos, setTodos]= useState([]);
    const changeHandler = e =>{
        setTask(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault();
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask("");
    }
    const deleteHandler= (indexValue) => {
        const newTodos= todos.filter((todo,index) => index!==indexValue);
        setTodos(newTodos);
    }
    
        return(
            <div>
                <center>
                    <div className="Todo">
                        <div className="Todo-body">
                            <h4 className="Todo-title">Todo App</h4>
                            <form onSubmit={submitHandler}>
                                <input className="style2" type="text" name="task" value={task} onChange={changeHandler}></input> &nbsp;&nbsp;
                                <input className="style1" type="submit" value="Add" name="Add"></input>
                            </form>
                            <br/>
                            <TodoList1 todolist={todos} deleteHandler={deleteHandler}/>
                        </div>
    
                    </div>
                </center>
            </div>
        )
    }
    
    
export default TodoApp1;