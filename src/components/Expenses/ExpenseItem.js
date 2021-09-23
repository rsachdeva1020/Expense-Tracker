
import "./CSS/ExpenseItem.css";

import "./ExpenseDate.js";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props){
    return(
        <div class="container my-2">
            <div class="row meriClass">
                <div class="col order-last insideClass mx-3 my-2">
                    <h4>
                        ${props.prop.amount}
                    </h4>
                </div>
                <div class="col insideClass mx-3 my-2">
                    <h3>
                        {props.prop.title}
                    </h3>
                </div>
                <div class="col order-first insideClass mx-3 my-2">
                    <h5>
                        <ExpenseDate date={props.prop.date}/>
                    </h5>
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