import React, { useState,useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import LogLayout from '../containers/LogLayout/LogLayout'
import FeedLayout from '../containers/FeedLayout/FeedLayout'
import Feed from '../containers/Feed/Feed'
import Login from '../containers/Login/Login'
import Signup from '../containers/Signup/Signup'
import ForgotPassword from '../containers/ForgotPassword/ForgotPassword'
import {getOfertas} from '../api/offers'
import {getUser} from '../api/auth'

function Roots() {

    /*const postsMockup = [
        {
            post_id: 12345,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'paw',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'any',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123452,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'paint',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'any',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123453,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'leaf',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'pending',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123454,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'teach',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'going',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123451,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'users',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'any',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123452,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'ball',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'going',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123453,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'hands',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'pending',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            post_id: 123454,
            title: "Dog's bath time!",
            image: 'https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800',
            category: 'heart',
            date: 'Nov 30 - 2022',
            time: '12:30',
            location: 'instituto canino',
            status: 'any',
            nonProfitName: 'Fundación Patitas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]*/

    const [userType, setUserType] = useState('VOLUNTEER'); //must to be on 'VOLUNTEER'
    const [isLogged, setIsLogged] = useState(localStorage.getItem('logged') === 'true'); //must to be localStorage.getItem('logged') === 'true'
    const [loaddingPosts, setLoaddingPosts] = useState(false);
    const [posts, setPosts] = useState([]); //must to be []

    const offersSortDSC = (a,b) =>{
        return b.id - a.id
    }

    const filterPosts = (post) => {
        if(post.title !== null){
            if(userType === 'NON_PROFIT'){
                if(post.nomProfitUsername === localStorage.getItem('username')){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return true;
            }
        }
        else{
            return false;
        }
    }

    const reloadOffers = () => {
        setLoaddingPosts(true);
        getOfertas()
            .then((results) => {
                setLoaddingPosts(false);
                setPosts(results.filter(filterPosts).sort(offersSortDSC)); //@todo to check
                //setPosts(postsMockup); only for testing
            })
            .catch(console.error)
    }

    useEffect(() => {
        reloadOffers();
        getUser(setUserType)
    }, [isLogged])

    if(!isLogged){
        return(
            <Routes>
                <Route path="/" element={<LogLayout />}>
                    <Route index element={<Login setIsLogged={setIsLogged}/>}/>
                    <Route path="signup" element={<Signup />}/>
                    <Route path="forgot-password" element={<ForgotPassword />}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Route>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/app" element={<FeedLayout 
                                            reloadOffers={reloadOffers} 
                                            userType={userType} 
                                            setUserType={setUserType} 
                                            setIsLogged={setIsLogged} 
                                            setPosts={setPosts} 
                                            setLoaddingPosts={setLoaddingPosts} 
                                            loaddingPosts={loaddingPosts}/>}>
                <Route index element={<Feed posts={posts} userType={userType} reloadOffers={reloadOffers}/>}/>
                <Route path="*" element={<Navigate to="/app" />}/>
            </Route>
            <Route path="*" element={<Navigate to="/app" />}/>
        </Routes>
    );
}

export default Roots;