import './ForgotPassword.modules.css';
import React, { useState } from 'react';
import FPstep1 from './FPstep1';
import FPstep2 from './FPstep2';
import FPstep3 from './FPstep3';

function ForgotPassword() {

  const[step, setStep] = useState(1);

  return (
    <div className="ForgotPassword-container">
      {(step === 1) && (<FPstep1 setStep={setStep}/>)}
      {(step === 2) && (<FPstep2 setStep={setStep}/>)}
      {(step === 3) && (<FPstep3 setStep={setStep}/>)}
    </div>
  );
}

export default ForgotPassword;
