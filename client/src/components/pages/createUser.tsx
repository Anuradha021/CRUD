// src/pages/CreateUsers.tsx
import React from 'react';
import UserForm from '../forms/UserForm';

const CreateUser: React.FC = () => {
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <UserForm/>
      </div>
    </div>
  );
};

export default CreateUser;
