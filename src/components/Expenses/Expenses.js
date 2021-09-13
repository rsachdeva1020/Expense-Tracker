import ExpenseItem from './ExpenseItem'
import Filter from './Filter'

import React, {useState} from 'react'

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(expense => <ExpenseItem prop={expense}></ExpenseItem>)}            
        </div>
    )
}


