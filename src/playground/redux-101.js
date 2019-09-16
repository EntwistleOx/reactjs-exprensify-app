import { createStore } from 'redux'

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ set = 1 } = {}) => ({
    type: 'SET',
    set
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. reducers are pure function
// 2. never change state or action
const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.set
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
} 

const store = createStore(countReducer)

// Subscribe - do someting when the store change
// also return a function to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 5 }))

store.dispatch(setCount())

store.dispatch(setCount({ set: 101 }))

store.dispatch(resetCount())

// // Increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

// // unsubscribe()

// store.dispatch({
//     type: 'INCREMENT'
// })

// // Decrement count
// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })