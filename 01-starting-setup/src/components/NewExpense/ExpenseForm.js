import React,{useState} from 'react';
import "./Expenseform.css";
function ExpenseForm(props) {

const[ enteredTitle,setEnteredTitle] = useState('');
const[enteredAmount ,setEnteredAmount]= useState('');
const[enterDate,setEnteredDate]=useState('');
function titleChangedHandler(event)
{
    setEnteredTitle(event.target.value);
}
function amountChangedHandler(event)
{
    setEnteredAmount(event.target.value);
    
}
function dateChangedHandler(event) 
{
    setEnteredDate(event.target.value);
   
}
function submitHandler(event)
{
    event.preventDefault();
    const expenseData ={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enterDate)

    };
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
    props.onSaveExpenseData(expenseData);
};
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangedHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01"onChange={amountChangedHandler}value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2022-12-31"onChange={dateChangedHandler}value={enterDate}/>
        </div>
      </div>
      <button type="submit" className="new-expense__actions"  >Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
