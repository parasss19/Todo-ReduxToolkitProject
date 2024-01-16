import { createSlice, nanoid } from "@reduxjs/toolkit";        //createSlice will used to make slice(features), and nanoid is used to generate unique id

//create intial state (it can be array or object)
// const initialState = {
//   todos: [{
//       id: 1,
//       text: "hellooo",
//       isComplete: false       //A boolean indicating whether the todo is marked as complete or not.
//     }],

//   //edit: This property represents an object that is likely used to track the state of an editing operation.
//   edit: {
//     id:null,           //Initially, there is no specific todo being edited, so id is set to null.
//     text:null          //Similarly, the text property is set to null initially, indicating that there is no text being edited.
//   }   
// };

//now we create slice
// export const TodoSlice = createSlice({
//   name: "todo",
//   initialState,         //we can also  make the initialstate here instead of taking its reference

//   //reducers (it contain properties and function)
//   reducers: {
//     //we have access of state and action
//     //state = it give access of the current state variables
//     //action = it provide values to use methods
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.todos.push(todo)      //updating state(as todos is an array so we push our todo)
//     },
//     removeTodo: (state, action) => {
//         state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload)
//     },
//   updateTodo: (state, action) => {
//    state.todos = state.todos.map((eachTodo) => {
//      if(action.payload.id == eachTodo.id) {
//        eachTodo.text = action.payload.text
//      }
//       return eachTodo
//     })
//    //After updating the todos, it sets state.edit to { id: null, text: null }.This likely indicates that the editing state is being reset after the update operation. This could be used to signal that there is no active editing in progress.
//       state.edit = {id: null, text: null}
//    }
//   },
// });



//Above create slice code is for revision with comments
const initialState = {
  todos: [{
      id: 1,
      text: "hellooo",
      isComplete: false      
    }],

  edit: { id:null, text:null }   
};

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
  
    reducers: {
      addTodo: (state, action) => {
        const todo = {
          id: nanoid(),
          text: action.payload
        };
        state.todos.push(todo)      
      },

      removeTodo: (state, action) => {
          state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload)
      },

      updateTodo: (state, action) => {
       state.todos = state.todos.map((eachTodo) => {
          if(action.payload.id == eachTodo.id) {
            eachTodo.text = action.payload.text
          }
           return eachTodo
       })
        state.edit = {id: null, text: null}
      },

      editTodo : (state, action) => {
        state.edit = action.payload
      },

      toggleTodo : (state, action) => {
        state.todos = state.todos.map((eachTodo) => {
          if(eachTodo.id == action.payload){
            eachTodo.isComplete = !eachTodo.isComplete
          }
          return eachTodo
        })
      }

    },
  });

export const {addTodo, removeTodo, updateTodo, editTodo, toggleTodo} = TodoSlice.actions    //individually exporting reducer bcoz they need in components
export default TodoSlice.reducer                          //our store need list of all reducer to get info of all the methods like (addTodo,removeTodo etc) we have to export reducers too

