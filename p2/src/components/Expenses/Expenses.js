import { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');
    // const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');
    let filterInfoText = '2019, 2021, 2022, 2023';

    if (filteredYear === '2019'){
        filterInfoText = '2020, 2021, 2022, 2023';
    } else if (filteredYear === '2020'){
        filterInfoText = '2019, 2021, 2022, 2023';
    } else if (filteredYear === '2021'){
        filterInfoText = '2019, 2020, 2022, 2023';
    } else if (filteredYear === '2022'){
        filterInfoText = '2019, 2020, 2021, 2023';
    } else if (filteredYear === '2023'){
        filterInfoText = '2019, 2020, 2021, 2022';
    };

    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;        
    });
    
    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <p>Data for years {filterInfoText} is hidden.</p>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
}
export default Expenses;