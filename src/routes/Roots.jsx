import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import LogLayout from '../containers/LogLayout/LogLayout'
import Login from '../containers/Login/Login'
import Signup from '../containers/Signup/Signup'
import ForgotPassword from '../containers/ForgotPassword/ForgotPassword'

function Roots() {
    const [isLogged, setIsLogged] = useState(false);

    if(!isLogged){
        return(
            <Routes>
                <Route path="/" element={<LogLayout />}>
                    <Route index element={<Login setIsLogged={setIsLogged}/>}/>
                    <Route path="signup" element={<Signup />}/>
                    <Route path="forgot-password" element={<ForgotPassword />}/>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route>
            </Route>
        </Routes>
    );
}

export default Roots;