import './Login.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { login } from "../../api/auth";
import { toast } from 'react-toastify';

function Login(props) {

  const {setIsLogged, setUsername, username} = props

  const navigate = useNavigate();

  
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userToLogin, setUserToLogin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if(userToLogin === ''){
      toast.error("Please add a username");
      return
    }

    if(password === ''){
      toast.error("Please add a password");
      return
    }

    setLoading(true);

    login(userToLogin, password, setIsLogged, setUsername)
      .then((results) => {
        if (results === true) {
          navigate("/app");
        }
        else{
          toast.error("User incorrect. Please check your credentials or create an account.");
        }
        setLoading(false);
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
          value={userToLogin}
          onChange={(e) => setUserToLogin(e.target.value)}
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
          { loading
            ? (
              <div className='spinner'></div>
            ) : ('Login')
          }
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
