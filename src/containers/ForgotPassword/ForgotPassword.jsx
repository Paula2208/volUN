import './ForgotPassword.modules.css';
import React, { useState } from 'react';
import FPstep1 from './FPstep1';
import FPstep2 from './FPstep2';
import FPstep3 from './FPstep3';

function ForgotPassword() {

  const[step, setStep] = useState(1);
  const[email, setEmail] = useState('');
  const[code, setCode] = useState('');

  return (
    <div className="ForgotPassword-container">
      {(step === 1) && (<FPstep1 setStep={setStep} email={email} setEmail={setEmail}/>)}
      {(step === 2) && (<FPstep2 setStep={setStep} code={code} setCode={setCode}/>)}
      {(step === 3) && (<FPstep3 setStep={setStep} email={email} code={code}/>)}
    </div>
  );
}

export default ForgotPassword;
