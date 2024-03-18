import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMsg: "Hello Todo",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id)=>{},
    toggleCompleted: (id) => {}
});

//provider
export const TodoContextProvider = TodoContext.Provider

//context custom hook
export const useTodo = () => {
    return useContext(TodoContext);
}