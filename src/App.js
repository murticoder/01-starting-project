import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([])


  const addUserHandler = (userName, userAge) => {
    setUsersList((presUsersList) => {
      return [...presUsersList, { name: userName, age: userAge , id : Math.random().toString()}]
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
