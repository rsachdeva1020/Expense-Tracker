
// import "./CSS/ExpenseItem.css";

import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props){
    return(
        <div class="container">
            <div class="row">
                <div class="col order-last">
                    ${props.prop.amount}
                </div>
                <div class="col">
                    <h2>
                        {props.prop.title}
                    </h2>
                </div>
                <div class="col order-first">
                    <ExpenseDate date={props.prop.date}/>
                </div>
            </div>
        {/*
        <div className="expense-item">
            <ExpenseDate date={props.prop.date}/>
            <div className="expense-item__description">
                <h2>
                    {props.prop.title}
                </h2>
                <div className="expense-item__price">${props.prop.amount}</div>
            </div>
        </div>
        */}
        </div>
    )
}

export default ExpenseItem;