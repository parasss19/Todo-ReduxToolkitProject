import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../Feature/Todo/TodoSlice"
import { useState } from "react";

function TodoItem () {
  const todoItems = useSelector( (state) => state.todos )   //state.todos = this are initialstate todos in TodoSlice.js file
  const dispatch = useDispatch()
    
  const [isTodoEditable, setIsTodoEditable] = useState(false); //this state is used to edit the todo
  
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });         //our updateTodo method is defined in app.jsx and it req id and todo params
    setIsTodoEditable(false);                                //as it is updated (now its not editable)
  };


  return (
    <>
    {/* This is the basic functionality without proper css
    {
      // todoItems are array so we use map method
      todoItems.map((eachTodo) => (
        <li 
          key={eachTodo.id}>
          {eachTodo.text}
          <button onClick={() => dispatch(removeTodo(eachTodo.id))}
          >
            X
          </button>
        </li>
      ))
    } 
    */}


  {/* functionality with proper css */}
  <ul className="list-none">
    {todoItems.map((todo) => (
      <li
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        key={todo.id}
      >
        <div className='text-white'>{todo.text}</div>
      

      <div className="flex justify-end gap-4">
       {/* Edit, Save Button */}
       <button
         className="text-white  bg-white/20 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
        onClick={() => {
          if (isTodoEditable) {
            editTodo();
          } 
          else setIsTodoEditable((prev) => !prev);
        }}
        // disabled={todo.check}
       >
        {isTodoEditable ? "📁" : "✏️"}
       </button>

        {/* Delete Button */}
          <button
           onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white  bg-white/20 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            🗑️
          </button>
      </div>

        </li>
      ))}
    </ul>
  </>
  )
}

export default TodoItem
