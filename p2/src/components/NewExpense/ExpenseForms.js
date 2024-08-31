import './ExpenseForm.css';
import { useState } from 'react';
// import dayjs from "dayjs";
export default function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredData, setEnteredData] = useState(new Date());

    function inputChangeHandler(identifier, value){
        if (identifier === 'title') {
            setEnteredTitle(value);
        } else if (identifier === 'amount'){
            setEnteredAmount(value);
        } else if (identifier === 'data'){
            setEnteredData(value);
        }
    };
    
    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredData),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredData(new Date());
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={(event) => inputChangeHandler('amount', event.target.value)}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredData.getDate} min="2019-01-01" max="2023-12-31" onChange={(event) => inputChangeHandler('data', event.target.value)}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        );

}