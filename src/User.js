import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user">
      <p>First Name: {user.firstname}</p>
      <p>Last Name: {user.lastname}</p>
      <p>Age: {user.age}</p>
      <p>DOB: {user.dob}</p>
    </div>
  );
};

export default User;
