import ExpenseItem from './ExpenseItem'
import Filter from './Filter'

import React, {useState} from 'react'

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.length > 0 ? filteredExpenses.map(expense => <ExpenseItem key={expense.id} prop={expense}></ExpenseItem>) : <h1>No expenses found in selected year</h1>}            
        </div>
    )
}


