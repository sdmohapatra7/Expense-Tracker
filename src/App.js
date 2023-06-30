import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseInfo from './components/ExpenseInfo/ExpenseInfo';
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
  const[expense,setExpense] = useState([]);
  console.log(expense);
  return (
    <>
    <h2 className="mainHeading">Expense Tracker</h2>
    <div className="App">
      <div className='fullPage'>
        <ExpenseForm expense={expense} setExpense={setExpense}/>
        <div className='expenseContainer'>
          <ExpenseInfo expense={expense} />
          <ExpenseList expense={expense}/>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
