import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from './components/pages/createUser';
import Users from './components/pages/Users';
import UpdateUser from './components/pages/UpdateUser';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/create" element={<CreateUser />} /> 
          <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
