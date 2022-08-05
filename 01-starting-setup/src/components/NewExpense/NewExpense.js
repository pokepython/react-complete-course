import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
function NewExpense(props){

function saveExpenseDataHandler(enteredExpenseData)
{
const expensData=
{
    ...enteredExpenseData,
    id:Math.random().toString()
    
}
props.onAddExpense(expensData);

}
return <div className="new-expense">

<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
</div>
};

export default NewExpense