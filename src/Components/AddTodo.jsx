import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleTodo() {
    if(input.trim()==="") return; 
    dispatch(addTodo(input.trim()));
    setInput("");
  }
  return (
    <div className=" flex items-start justify-center gap-3">
      <input
       className="rounded-xl text-black py-2 px-8 "
        type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
        placeholder="Add Todo data here.."
        onKeyDown={e=>{
            if(e.key==='Enter'){
                handleTodo();
            }   
                else if(e.key==='Escape'){
                    setInput('')
                }
            }   
        }
      />
      <button className="px-4 py-2 rounded-md bg-blue-400" onClick={handleTodo}>Add</button>
    </div>
  );
}

