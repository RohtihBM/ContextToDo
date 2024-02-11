import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed : false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



export const useTodo = () => {
    return useContext(TodoContext)// use todo is hook to access the context
}

export const TodoProvider = TodoContext.Provider