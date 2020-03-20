import React, {useState} from 'react';
import {Navbar} from './components/nav-bar';
import {TodoForm} from './components/TodoForm';

const App: React.FC = () => {

    const [todos, setTodos] = useState([]);

    const addHandler = (title : string) => {
        console.log('Add new Todo' + title)
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <TodoForm onAdd={addHandler}></TodoForm>
            </div>
        </div>
    )
};

export default App;
