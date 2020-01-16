import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123asd' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asd'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123asd', { note: 'New value' })
    expect(action).toEqual({
        id: '123asd',
        type: 'EDIT_EXPENSE',
        updates: { note: 'New value' }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was last month rent',
        amount: 109500,
        createdAt: 1000
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})