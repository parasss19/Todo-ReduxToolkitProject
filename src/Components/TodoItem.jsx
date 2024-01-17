import { useSelector, useDispatch } from "react-redux"
import { removeTodo, editTodo, toggleTodo } from "../Feature/Todo/TodoSlice"


function TodoItem () {
  const todoItems = useSelector( (state) => state.todos )   //state.todos = this are initialstate todos in TodoSlice.js file
  const dispatch = useDispatch()
    
  return (
    <>
    {/* This is the basic functionality without proper css
    {
      // todoItems are array so we use map method
      todoItems.map((eachTodo) => (
        <li 
          key={eachTodo.id}>
        >
          {eachTodo.text}
          <button onClick={() => dispatch(removeTodo(eachTodo.id))}
            X
          </button>
        </li>
      ))
    } 
    */}


  {/* functionality with proper css */}
  <ul className="list-none">
        
    { 
      todoItems.map((eachTodo) => (
       <li className="mt-4 flex justify-between items-center bg-black/70 px-4 py-2 rounded"  key = {eachTodo.id} >
       <input 
          type="checkbox" 
          onClick={()=>
             dispatch(toggleTodo(eachTodo.id))
          }
          value = {eachTodo.isComplete}
       />

      {
        eachTodo.isComplete === false ? <div className="text-white">{eachTodo.text}</div> : <div className="text-red-700">{eachTodo.text}</div>
      }

      <div>
      {console.log(eachTodo.isComplete) }
      { 
          eachTodo.isComplete === false ? 
           <button 
             className="mx-2 bg-slate-400/25 border-0 py-1 px-4 focus:outline-none hover:bg-white/40 rounded text-md"
             onClick = { () => dispatch(editTodo({id:eachTodo.id, text:eachTodo.text})) }
            >
            ✏️
           </button>
          :
          <div></div>
      }

        <button
           className="mx-2 bg-slate-400/25 border-0 py-1 px-4 focus:outline-none hover:bg-white/40 rounded text-md"
           onClick={() => dispatch(removeTodo(eachTodo.id))}
          >
          🗑️
        </button>
      </div>
      
      </li>
      ))
    }
  </ul>

  </>
  )}

export default TodoItem
