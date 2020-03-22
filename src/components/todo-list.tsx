import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[],
    onRemove(id: number): void,
    onToggle(id: number): void
}


export const TodoList: React.FC<TodoListProps> = ({todos,onToggle,onRemove}) => {
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];
                if(todo.completed) classes.push('completed');

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label htmlFor="">
                            <input onChange={() => onToggle(todo.id)} type="checkbox" checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i onClick={() => onRemove(todo.id)} className="material-icons red-text">
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
};