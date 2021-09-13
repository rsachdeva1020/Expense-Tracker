// root component
import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const INITIAL_EXPENSES = [
  {
    date : new Date(2021, 2, 28),
    title : 'Car Insurance',
    amount : 294.67,
    id : Math.random().toString(),
  },
  {
    date : new Date(2021, 1, 12),
    title : 'Food',
    amount : 94.67,
    id : Math.random().toString(),
  },
]

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense){
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
