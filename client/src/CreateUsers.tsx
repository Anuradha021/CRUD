import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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

    axios
      .post('http://localhost:3001/createUser', { name, email, age })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate('/');
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input type="text" placeholder="Enter Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label>Age</label>
            <input type="text" placeholder="Enter Age" className="form-control" onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
