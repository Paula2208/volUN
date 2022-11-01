import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import LogLayout from '../containers/LogLayout/LogLayout'
import FeedLayout from '../containers/FeedLayout/FeedLayout'
import Feed from '../containers/Feed/Feed'
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
            <Route path="/app" element={<FeedLayout />}>
                <Route index element={<Feed />}/>
            </Route>
        </Routes>
    );
}

export default Roots;