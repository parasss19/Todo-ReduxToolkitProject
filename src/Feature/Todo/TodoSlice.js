import { createSlice, nanoid } from "@reduxjs/toolkit";        //createSlice will used to make slice, and nanoid is used to generate unique id

//create intial state
const initialState = {
  todos: [{
      id: 1,
      text: hellooo,
    }]
};


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
//   },
// });

//Above create slice code is for revision with comments

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
    },
  });

export const {addTodo, removeTodo} = TodoSlice.actions    //individually exporting reducer bcoz they need in components
export default TodoSlice.reducer                          //our store need list of all reducer to get info of all the methods like (addTodo,removeTodo etc) we have to export reducers too

