import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateForm from '../forms/UpdateForm';

const UpdateUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getUser/${id}`)
      .then((result) => {
        setFormData({
          name: result.data.name,
          email: result.data.email,
          age: result.data.age,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateUser/${id}`, formData)
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <UpdateForm formData={formData} setFormData={setFormData} onSubmit={handleUpdate} />
      </div>
    </div>
  );
};

export default UpdateUser;
