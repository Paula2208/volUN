import './ForgotPassword.modules.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { isEmail } from '../../helpers/inputHelpers'
import { toast } from 'react-toastify';
import { sendForgotPasswordCode } from '../../api/auth'

function FPstep1(props) {

  const navigate = useNavigate();
  const { email, setEmail, setStep } = props;

  const [loadingSend, setLoading] = useState(false);

  const handleSendStep1 = () => {
    if (isEmail(email)) {
      setLoading(true);
      sendForgotPasswordCode(email)
        .then((status) => {
          if (status === 201) {
            setStep(2);
            setLoading(false);
          }
          else {
            toast.error('Error. Please, try again later!');
            setLoading(false);
          }
        })
    }
    else {
      toast.error('Please enter a valid email.');
    }
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
        <div className="ForgotPassword-input-line" />
      </div>

      <div className="ForgotPassword-buttons">
        <button className="ForgotPassword-btn-send pointer"
          onClick={handleSendStep1}
        >
          {loadingSend ? (
            <div className='spinner'></div>
          ) : ('Send')}
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
