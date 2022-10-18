import './Login.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('button login clicked')
  }

  return (
    <div className="Login-container">

      <div className="Login-inputs-complete">
        <input 
          type="text"
          className="Login-input" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="Login-input-line line-more"/>
        <input 
          type="password"
          className="Login-input" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="Login-input-line"/>
      </div>

      <div className="Login-buttons">
        <button className="Login-btn-login pointer"
                onClick={handleLogin}
        >
          Login
        </button>
        <button className="Login-btn-signup pointer"
                onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>

      <span className="Login-forgot-link pointer"
           onClick={() => navigate("/forgot-password")}
      >
        Forgot your password?
      </span>

    </div>
  );
}

export default Login;
