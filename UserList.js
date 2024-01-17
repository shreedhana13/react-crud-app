// src/UserList.js
import React from 'react';

const UserList = ({ users, onEditClick, onDeleteClick }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => onEditClick(user)}>Edit</button>
            <button onClick={() => onDeleteClick(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
