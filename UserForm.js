// src/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ onAddUser, onEditUser, onCancelEdit, selectedUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      onEditUser(user);
    } else {
      onAddUser(user);
    }
    setUser({ name: '', email: '' });
  };

  const handleCancel = () => {
    onCancelEdit();
    setUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <button type="submit">{selectedUser ? 'Edit User' : 'Add User'}</button>
        {selectedUser && <button type="button" onClick={handleCancel}>Cancel Edit</button>}
      </form>
    </div>
  );
};

export default UserForm;
