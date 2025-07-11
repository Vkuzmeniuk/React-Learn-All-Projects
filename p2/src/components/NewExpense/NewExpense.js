import {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForms";

export default function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };
    function startEditingHandler(){
        setIsEditing(true)
    };

    function stopEditingHandler(){
        setIsEditing(false)
    };

    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
    );
}