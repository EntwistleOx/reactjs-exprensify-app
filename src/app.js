import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
// import { addExpense, editExpense, removeExpense } from './actions/expenses'
// import { setTextFilter, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

// store.subscribe(() => {
//     const state = store.getState()
//     console.log(state)
// })

// store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
// store.dispatch(addExpense({description: 'Gas bill', createdAt:1000}))
// store.dispatch(addExpense({description: 'Rent', amount: 109500}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)
// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))