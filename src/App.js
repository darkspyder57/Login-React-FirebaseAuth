import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Register from './Components/Register';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterClick = () =>{
    setShowLogin(true);
  };

  return (
    <Router>
      <nav>
      <Header />
      <Link to="/register" className='nav-link' onClick={handleRegisterClick}>Register</Link>
      {showLogin && <Link to="/" className='nav-link'>Login</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router> 
  );
}

export default App;
