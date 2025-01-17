import { combineReducers } from 'redux'
import todosReducer from './features/todos/todoSlice'
import filtersReducer from './features/filters/filtersSlice'

// export default function rootReducer(state = {}, action) {
//   // always return a new objetc for the root staet
//   return {
//     // the value of `state.todos` is whatever the todos reducer returns
//     todos: todosReducer(state.todos, action),
//     // For both reducers, we only pass in their slice of the state
//     filters: filtersReducer(state.filters, action),
//   }
// }

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
