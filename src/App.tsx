import React, {useState} from 'react';
import {Navbar} from './components/nav-bar';
import {TodoForm} from './components/TodoForm';
import { TodoList } from './components/todo-list';
import { ITodo } from './interfaces';

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title : string) => {

        const newTodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [newTodo,...prev])
    };

    const toggleHandler = (id: number):void => {
        setTodos(prev => prev.map(todo =>{
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        }))
    };

    const removeHandler = (id: number):void => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <TodoForm onAdd={addHandler}></TodoForm>
                <TodoList onRemove={removeHandler} onToggle={toggleHandler} todos={todos}/>
            </div>
        </div>
    )
};

export default App;
