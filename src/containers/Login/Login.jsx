import './Login.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { login } from "../../api/auth";
import { toast } from 'react-toastify';

function Login(props) {

  const {setIsLogged} = props;

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if(username === ''){
      toast.error("Please add a username");
      return
    }

    if(password === ''){
      toast.error("Please add a password");
      return
    }

    login(username, password)
      .then((results) => {
        if (results === true) {
          setIsLogged(true);
          navigate("/app");
        }
        else{
          toast.error("No user found.");
        }
      })
      .catch(console.error);
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
