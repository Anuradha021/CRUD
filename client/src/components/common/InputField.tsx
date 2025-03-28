// src/components/common/InputField.tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div className="mb-2">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default InputField;
