import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
export default function Adduser(props){
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const errorInputRef = useRef();
    
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
    const [error, setError] = useState();
    function addUserHandler(event){
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;}
        if (+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;}
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value)
    };

    function ageChangeHandler(event){
        setEnteredAge(event.target.value)
    };

    function errorHandler(){
        setError(null);
    };

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} ref={nameInputRef}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} ref={ageInputRef}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};