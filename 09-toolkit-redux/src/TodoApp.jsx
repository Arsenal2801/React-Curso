import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/api/todosApi"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)

  // const { data: todos, isLoading } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const prevTodo = () => {
    if (todoId == 1) return
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'false'} </h4>
      <pre>
        {JSON.stringify(todo)}
      </pre>

      <button onClick={prevTodo}>
        Previous todo
      </button>
      <button onClick={nextTodo}>
        Next todo
      </button>
    </>
  )
}
