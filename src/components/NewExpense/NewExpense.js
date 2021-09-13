import React from 'react'
import Form from './Form'

export default function NewExpense(props){

    function saveExpenseDataHandler(enteredData){
        enteredData = {
            ...enteredData, 
            id : Math.random().toString(),
        }
        props.onAddExpense(enteredData);
    }

    return(
        <Form onSaveExpenseData={saveExpenseDataHandler}/>
    )
}