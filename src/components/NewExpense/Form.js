import React, {useState} from 'react'

import './form.css';

export default function Form(props){

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            date : new Date(enteredDate),
            title : enteredTitle,
            amount : enteredAmount,
        }

        props.onSaveExpenseData(expenseData);

        // clearing input fields
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    return(
    <div className="form">
        <form onSubmit={submitHandler}>
            <div>
                Title : <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div>
                Amount : <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div>
                Date : <input type="date" min='2019-01-01'
                max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <div>
                <button type="submit">Submit </button>
            </div>
        </form>
    </div>
    )
}