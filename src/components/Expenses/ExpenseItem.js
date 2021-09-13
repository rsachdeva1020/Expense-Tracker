
import "./CSS/ExpenseItem.css";

import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props){
    // console.log(props.prop)
    return(
        <div className="expense-item">
            <ExpenseDate date={props.prop.date}/>
            <div className="expense-item__description">
                <h2>
                    {props.prop.title}
                </h2>
                <div className="expense-item__price">${props.prop.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;