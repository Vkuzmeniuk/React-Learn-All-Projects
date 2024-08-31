import React, {Fragment, useState} from 'react';
import Adduser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(uName, uAge){
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {username: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <Fragment>
      <Adduser onAddUser={addUserHandler}></Adduser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;
