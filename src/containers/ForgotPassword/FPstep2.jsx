import './ForgotPassword.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function FPstep2(props) {

  const navigate = useNavigate();

  const[digit1, setDigit1] = useState('');
  const[digit2, setDigit2] = useState('');
  const[digit3, setDigit3] = useState('');
  const[digit4, setDigit4] = useState('');
  const[digit5, setDigit5] = useState('');

  const handleSendStep2 = () => {
    console.log('button send clicked - step 2 forgot password')
    console.log(digit1+digit2+digit3+digit4+digit5);
    
    props.setStep(3);
  }

  return (
    <div className="FPstep2-container">

      <span className="ForgotPassword-Message">
        Please enter the code we send to your email here to recover your password!
      </span>

      <div className="FPstep2-Input-Container">
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxlength="1"
            value={digit1}
            onChange={(e) => setDigit1(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxlength="1"
            value={digit2}
            onChange={(e) => setDigit2(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxlength="1"
            value={digit3}
            onChange={(e) => setDigit3(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxlength="1"
            value={digit4}
            onChange={(e) => setDigit4(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxlength="1"
            value={digit5}
            onChange={(e) => setDigit5(e.target.value)}
          />
      </div>

      <div className="ForgotPassword-buttons">
        <button className="ForgotPassword-btn-send pointer"
                onClick={handleSendStep2}
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

export default FPstep2;
