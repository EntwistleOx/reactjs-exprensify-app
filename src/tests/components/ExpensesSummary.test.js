import React from 'react';
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total'

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={14500} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with multi expenses', () => {
    const total = getExpensesTotal(expenses)
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={total} />)
    expect(wrapper).toMatchSnapshot()
})
