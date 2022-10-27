import './Login.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const datos = {
    "username": username,
    "password": password
  }

  const handleLogin =async(e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("credenciales incorrectas");

    }else{
        let res = await axios.post("http://localhost:2022/login",datos);
        console.log(res.data)
    }
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
