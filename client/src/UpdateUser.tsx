import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const UpdateUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((result) => {
        
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
