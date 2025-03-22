// src/components/UserForm/UserForm.tsx
import React, { useState } from 'react';
import InputField from '../common/InputField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const navigate = useNavigate();

  // Validate Email
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form Submit Handler
  const Submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !age.trim()) {
      alert('All fields are required!');
      return;
    }
    if (!validateEmail(email.trim())) {
      alert('Please enter a valid email address!');
      return;
    }
    if (isNaN(Number(age.trim())) || Number(age.trim()) <= 0) {
      alert('Age must be a positive number!');
      return;
    }

    // Post Data to Backend
    axios
      .post('http://localhost:3001/createUser', { name, email, age })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={Submit}>
      <h2>Add User</h2>
      <InputField
        label="Name"
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Email"
        type="text"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Age"
        type="text"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default UserForm;
