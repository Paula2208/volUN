import './ForgotPassword.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function FPstep1(props) {

  const navigate = useNavigate();

  const[email, setEmail] = useState('');

  const handleSendStep1 = () => {
    console.log('button send clicked - step 1 forgot password')
    props.setStep(2);
  }

  return (
    <div className="FPstep1-container">

      <div className="ForgotPassword-inputs-complete">
        <input 
          type="text"
          className="ForgotPassword-input" 
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="ForgotPassword-input-line"/>
      </div>

      <div className="ForgotPassword-buttons">
        <button className="ForgotPassword-btn-send pointer"
                onClick={handleSendStep1}
        >
          Send
        </button>
        <button className="ForgotPassword-btn-signup pointer"
                onClick={() => navigate("../signup")}
        >
          Signup
        </button>
      </div>

    </div>
  );
}

export default FPstep1;
