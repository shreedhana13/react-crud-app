// src/App.js
import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import api from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    api.getUsers().then((data) => setUsers(data));
  }, []);

  const handleAddUser = async (user) => {
    const newUser = await api.addUser(user);
    setUsers([...users, newUser]);
  };

  const handleEditUser = async (user) => {
    const updatedUser = await api.editUser(user);
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setSelectedUser(null);
  };

  const handleDeleteUser = async (userId) => {
    await api.deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserList
        users={users}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteUser}
      />
      <UserForm
        onAddUser={handleAddUser}
        onEditUser={handleEditUser}
        onCancelEdit={handleCancelEdit}
        selectedUser={selectedUser}
      />
    </div>
  );
}

export default App;
