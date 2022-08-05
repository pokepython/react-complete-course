import ExpenseItem from "./ExpenseItem";
import React, { useState } from 'react';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

function Expenses(props){

  
    const [filteredYear, setFilteredYear] = useState('2021');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
  
return(
<Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense)=>(<ExpenseItem  
      title={expense.title}
       amount={expense.amount} 
       date={expense.date}/>)) }
      
    </Card>

);
  
}
export default  Expenses;