import { useState } from "react";
import { useTodo } from "../Contexts";

function TodoForm() {
    const [todo, setTodo] = useState("") // for input field
    const {addTodo} = useTodo ()// accessing from the context
    const add = (e)=>{// new function called add, not from the context
        e.preventDefault()

        if(!todo) return // this checks the value of todo created in using use state hook above.

        addTodo({todo})
        setTodo("")
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



