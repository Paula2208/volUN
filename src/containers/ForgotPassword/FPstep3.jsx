import './ForgotPassword.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { changePassword } from '../../api/auth'

function FPstep3(props) {

  const navigate = useNavigate();

  const[password, setPassword] = useState('');
  const [loadingSend, setLoading] = useState(false);

  const {setStep, code, email} = props;

  const handleSendStep3 = () => {
    changePassword(password, email, code)
      .then((results) => {
        if(results){
          toast.success('Password updated!');
          setStep(1);
          navigate("../");
        }
        else{
          toast.error('Something went wrong. Please try again.');
        }
      });
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
          {loadingSend ? (
            <div className='spinner'></div>
          ) : ('Change')}
        </button>
      </div>
      
    </div>
  );
}

export default FPstep3;
