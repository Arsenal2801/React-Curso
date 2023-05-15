import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-useReducer/TodoItem";

describe('Testing on <TodoItem/>', () => {
    const todo = {
        id: 1,
        desc: 'Aprender React',
        done: false
    }
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should be show correctly', () => {
        render(
            <
                ToDoItem todo={todo}
                onDeleteTodo={handleDelete}
                onToggleTodo={handleToggle}
            />)
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');

    })
    test('should show a toggled todo', () => {
        todo.done = true;
        render(
            <
                ToDoItem todo={todo}
                onDeleteTodo={handleDelete}
                onToggleTodo={handleToggle}
            />)
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    })
    test('should call handleToggle', () => {
        render(
            <
                ToDoItem todo={todo}
                onDeleteTodo={handleDelete}
                onToggleTodo={handleToggle}
            />)
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(handleToggle).toHaveBeenCalledWith(todo.id);
    })
    test('should call handleDelete', () => {
        render(
            <
                ToDoItem todo={todo}
                onDeleteTodo={handleDelete}
                onToggleTodo={handleToggle}
            />)
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(handleDelete).toHaveBeenCalledWith(todo.id);
    })
})