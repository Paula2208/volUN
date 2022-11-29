import './ForgotPassword.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { checkPasswordCode } from '../../api/auth'

function FPstep2(props) {

  const navigate = useNavigate();

  const {setStep, code, setCode} = props;

  const[digit1, setDigit1] = useState('');
  const[digit2, setDigit2] = useState('');
  const[digit3, setDigit3] = useState('');
  const[digit4, setDigit4] = useState('');
  const[digit5, setDigit5] = useState('');

  const [loadingSend, setLoading] = useState(false);

  const handleSendStep2 = () => {

    if(digit1 && digit2 && digit3 && digit4 && digit5){
      setLoading(true);
      setCode(digit1 + digit2 + digit3 + digit4 + digit5);

      checkPasswordCode(digit1 + digit2 + digit3 + digit4 + digit5)
        .then((results) => {
          if(results){
            setLoading(false);
            setStep(3);
          }
          else{
            setLoading(false);
            toast.error('Your code is not correct!');
          }
        });
    }
    else{
      toast.error('Please enter the passcode.')
    }
  }

  return (
    <div className="FPstep2-container">

      <span className="ForgotPassword-Message">
        Please enter here the code we send to your email to retrieve your password!
      </span>

      <div className="FPstep2-Input-Container">
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxLength="1"
            value={digit1}
            onChange={(e) => setDigit1(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxLength="1"
            value={digit2}
            onChange={(e) => setDigit2(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxLength="1"
            value={digit3}
            onChange={(e) => setDigit3(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxLength="1"
            value={digit4}
            onChange={(e) => setDigit4(e.target.value)}
          />
        <input 
            type="text"
            className="FPstep2-input" 
            placeholder=""
            maxLength="1"
            value={digit5}
            onChange={(e) => setDigit5(e.target.value)}
          />
      </div>

      <div className="ForgotPassword-buttons">
        <button className="ForgotPassword-btn-send pointer"
                onClick={handleSendStep2}
        >
          {loadingSend ? (
            <div className='spinner'></div>
          ) : ('Check')}
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
