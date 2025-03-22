import React from 'react';

interface FormProps {
  formData: {
    name: string;
    email: string;
    age: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UpdateForm: React.FC<FormProps> = ({ formData, setFormData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Update User</h2>
      <div className="mb-2">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          className="form-control"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label>Age</label>
        <input
          type="text"
          placeholder="Enter Age"
          className="form-control"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
      </div>
      <button className="btn btn-success">Update</button>
    </form>
  );
};

export default UpdateForm;
