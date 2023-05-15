import { ToDoApp } from "../../src/08-useReducer/ToDoApp";
import { act, render, screen } from "@testing-library/react";
import { useTodos } from "../../src/hooks/useTodos";
jest.mock("../../src/hooks/useTodos");

describe('Testing <ToDoApp/>', () => {
    useTodos.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Aprender React',
                done: false
            },
            {
                id: 2,
                description: 'Aprender Mongo',
                done: true
            }
        ],
        handleNewToDo: jest.fn(),
        handleDeleteToDo: jest.fn(),
        handleToggleToDo: jest.fn(),
        todosCounter: 2,
        pendingTodos: 2
    });
    test('should show correctly <ToDoApp/>', () => {

        render(<ToDoApp />)
        expect(screen.getByText('Aprender React')).toBeTruthy();
        expect(screen.getByText('Aprender Mongo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();


    })
})