import ExpenseItem from './ExpenseItem'

import React from 'react'

export default function Expenses(props) {
    return (
        <div>
            {props.items.map(expense => <ExpenseItem prop={expense}></ExpenseItem>)}            
        </div>
    )
}


