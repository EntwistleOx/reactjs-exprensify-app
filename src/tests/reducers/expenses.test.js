import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove a expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 80
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: 4,
        description: 'Laptop',
        note: 'new yeah',
        amount: 5000,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        ...expenses, expense
    ])
})

test('should edit an expense', () => {
    const description = 'Debit card'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toBe(description)
})

test('should not edit an expense if id not exist', () => {
    const description = 'Debit card'
    const action = {
        type: 'EDIT_EXPENSE',
        id: 70,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})