import './ExpenseDate.css';

function ExpenseDate(props){
    // console.log(props)
    return (
        // <div>{props.date.toISOString()}</div>
        <div>
            <div>{props.date.getDate()}</div>
            <div>{props.date.toLocaleString('en-US', {
                month : 'long',
                })}
            </div>
            <div>{props.date.getFullYear()}</div>
        </div>
    );
}

export default ExpenseDate;