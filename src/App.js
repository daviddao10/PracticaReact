import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pags/LoginPage.js'
import Adverts from './pags/Adverts.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' index element={<LoginPage/>} />
        <Route path='/adverts' element={<Adverts/>} />
          <Route path=':advertsID' element={<LoginPage/>} />
          <Route path='/newAdverts' element={<LoginPage/>} />
          <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/404" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      
    </div>
  );
}

export default App;
