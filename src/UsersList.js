import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
