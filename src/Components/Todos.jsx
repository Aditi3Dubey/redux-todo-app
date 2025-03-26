import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAll,removeTodo } from '../features/todo/todoSlice'
import removeLogo from '../assets/delete (1).png'

export default function Todos() {
    let {todos} = useSelector(state=>state)
    let dispatch =useDispatch()
  return (
    <div className="mt-4 flex flex-col items-center justify-between">
  {todos.length !== 0 ? (
    todos.map((todo) => (
      <div
        key={todo.id}
        className="flex items-center justify-between w-full max-w-md gap-4 border-b pb-2"
      >
        {/* Wrapping text properly */}
        <h1 className="text-wrap max-w-sm break-words text-xl font-bold p-2">
          {todo.text}
        </h1>
        
        {/* Delete Button */}
        <img
          onClick={() => dispatch(removeTodo(todo.id))}
          src={removeLogo}
          className="w-8 cursor-pointer invert hover:opacity-80"
          alt="Remove"
        />
      </div>
    ))
  ) : (
    <h1 className='text-xl font-bold p-2 mt-4'>No items yet..</h1>
  )}

  <button
    className="bg-red-600 text-white rounded-xl px-4 py-2 mt-8"
    onClick={() => dispatch(removeAll())}
  >
    Clear All Todos
  </button>
</div>


  )
}
  