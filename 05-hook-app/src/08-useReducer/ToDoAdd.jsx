import React from 'react'
import { useForm } from "../hooks";

export const ToDoAdd = ({ onNewToDo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewToDo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input
                name='description'
                type="text"
                placeholder='Description'
                className='form-control'
                value={description}
                onChange={onInputChange}
            />
            <button type='submit' className='btn btn-outline-primary' >Add</button>
        </form>
    )
}
