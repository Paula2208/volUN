import './ForgotPassword.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function FPstep3(props) {

  const navigate = useNavigate();

  const[password, setPassword] = useState('');

  const handleSendStep3 = () => {
    console.log('button send clicked - step 3 forgot password')
    props.setStep(1);
    navigate("../");
  }

  return (
    <div className="FPstep3-container">

      <div className="ForgotPassword-inputs-complete">
        <input 
          type="password"
          className="ForgotPassword-input" 
          placeholder="Enter your New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="ForgotPassword-input-line"/>
      </div>

      <div className="ForgotPassword-buttons">
        <button className="ForgotPassword-btn-send pointer Forgot-Password-recover"
                onClick={handleSendStep3}
        >
          Recover
        </button>
      </div>
      
    </div>
  );
}

export default FPstep3;
