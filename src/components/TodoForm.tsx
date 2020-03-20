import React, {useState} from "react";

interface TodoFormProps {
    onAdd(title : string): void
}


export const TodoForm: React.FC<TodoFormProps> = props => {

    const [title, setTitle] = useState<string>('');


    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };


    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(title);
            setTitle('');
        }
    };

    return (
        <div className="input-field">
            <input
                onKeyPress={keyPressHandler}
                onChange={changeHandler}
                value={title}
                type="text"
                id="title"
                placeholder="Insert todo name"
            />
            <label htmlFor="title" className="active">
                Insert todo name
            </label>
        </div>
    )
};
