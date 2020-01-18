import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary)