import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
export default function ExpensesList(props){
    // let expenseC ontent = <p>No expenses found.</p>
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found.</h2>
    }
    return (
    <url className='expenses-list'>
        {props.items.map((expense) => (
        <ExpenseItem 
            key={expense.id}
            date={expense.date} 
            title={expense.title} 
            amount={expense.amount}>
        </ExpenseItem>)
        )}
    </url>
    )
};