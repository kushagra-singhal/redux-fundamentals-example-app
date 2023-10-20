
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { thunkMiddleware } from 'redux-thunk'
// import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers"
import { print1, print2, print3 } from './exampleAddons/middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

// let preloadedState
// const persistedTodoString = localStorage.getItem('todos')

// if (persistedTodoString) {
//     preloadedState = {
//         todos: JSON.parse(persistedTodoString)
//     }
// }

// const store = createStore(rootReducer, preloadedState)
// const middlewareEnhancer = applyMiddleware(print1, print2, print3)

//  the Redux core includes a compose function that can be used to merge multiple enhancers together.

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// middlewarer

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, composedEnhancer)

// export default store

// const store = createStore(rootReducer, undefined, composeEnhancer)

// function createStore(reducer, preloadedState) {
//     let state = preloadedState
//     const listeners = []
  
//     function getState() {
//       return state
//     }
  
//     function subscribe(listener) {
//       listeners.push(listener)
//       return function unsubscribe() {
//         const index = listeners.indexOf(listener)
//         listeners.splice(index, 1)
//       }
//     }
  
//     function dispatch(action) {
//       state = reducer(state, action)
//       listeners.forEach(listener => listener())
//     }
  
//     dispatch({ type: '@@redux/INIT' })
  
//     return { dispatch, subscribe, getState }
//   }

export default store