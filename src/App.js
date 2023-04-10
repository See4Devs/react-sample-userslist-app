import React from 'react';
import UsersList from './UsersList';

const App = () => {
  const users = [
    { id: 1, firstname: 'John', lastname: 'Doe', age: 30, dob: '1993-02-15' },
    { id: 2, firstname: 'Jane', lastname: 'Doe', age: 28, dob: '1995-06-20' },
    { id: 3, firstname: 'Mark', lastname: 'Smith', age: 35, dob: '1988-10-05' },
  ];

  return (
    <div className="App">
      <h1>Users List</h1>
      <UsersList users={users} />
    </div>
  );
};

export default App;
