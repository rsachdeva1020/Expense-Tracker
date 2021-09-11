// root component
import React from 'react';
// import ExpenseItem from "./components/Expenses/ExpenseItem.js";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const expenses = [
    {
      date : new Date(2021, 2, 28),
      title : 'Car Insurance',
      amount : 294.67,
    },
    {
      date : new Date(2021, 1, 12),
      title : 'Food',
      amount : 94.67,
    },
  ]


  // <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
  // <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
