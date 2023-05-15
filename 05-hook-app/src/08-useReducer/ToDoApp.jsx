
import { useTodos } from '../hooks'
import { ToDoAdd } from './ToDoAdd'
import { ToDoList } from './ToDoList'


export const ToDoApp = () => {
    const {
        todos,
        handleNewToDo,
        handleDeleteToDo,
        handleToggleToDo,
        todosCounter,
        pendingTodos
    } = useTodos()

    return (
        <>

            <h1>To Do App</h1>
            <hr />
            <div className='row'>
                <div className="col-7">
                    <div>
                        <span className='d-flex justify-content-between'><h4>Todos: {todosCounter}</h4><h4> Uncompleted: {pendingTodos}</h4></span>
                        <hr />
                    </div>
                    <ToDoList todos={todos} onDeleteToDo={handleDeleteToDo} onToggleToDo={handleToggleToDo} />
                </div>


                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr className='mt-4' />
                    <ToDoAdd onNewToDo={handleNewToDo} />
                </div>
            </div>
        </>
    )
}
