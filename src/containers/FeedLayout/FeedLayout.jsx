import './FeedLayout.modules.css';
import { Outlet, useNavigate } from "react-router-dom";
import { FaHandshake, FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock, FaChartPie } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import {MdPostAdd} from "react-icons/md";
import React, { useState, useEffect } from 'react';
import ModalCreatePost from '../../components/createPost/ModalCreatePost';
import ModalStatistics from '../../components/ModalStatistics/ModalStatistics'

import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";

export const getTimeNow = () => {
    const date = new Date();
    return date.getHours() + ':' + date.getMinutes();
}

function FeedLayout(props) {

    const {userType, setUserType, setIsLogged, setPosts, reloadOffers, setLoaddingPosts, loaddingPosts} = props;

    const navigate = useNavigate();

    const[teach, setTeach] = useState(false);
    const[heart, setHeart] = useState(false);
    const[users, setUsers] = useState(false);
    const[hands, setHands] = useState(false);
    const[leaf, setLeaf] = useState(false);
    const[ball, setBall] = useState(false);
    const[paw, setPaw] = useState(false);
    const[paint, setPaint] = useState(false);

    const[organization, setOrganization] = useState('');
    const[date, setDate] = useState(new Date());
    const[time, setTime] = useState(getTimeNow());

    const[postCount, setPostCount] = useState(0);
    const[usersCount, setUsersCount] = useState(0);

    const[organizations, setOrganizations] = useState([{name: 'organization 1', username: 'org1'},{name: 'organization 2', username: 'org2'}]); //@todo

    const[showCreateModal, setShowCreateModal] = useState(false);
    const[showStatisticsModal, setShowStatisticsModal] = useState(false);

    const getOptions = () => ( //@audit
        <>
          {organizations.map((organization) => (
            <option value={organization.username} key={organization.username}>{organization.name}</option>
          ))}
        </>
    );

    const logout = () => {
        setUserType('VOLUNTEER');
        localStorage.setItem('logged', false);
        localStorage.setItem('username', '');

        setIsLogged(false);
        navigate("../");
    }

    const filterPost = () => {
        setLoaddingPosts(true);
    }

    const handleCloseModal = () => {
        setShowCreateModal(false);
    }

    const handleCloseModalStatistics = () => {
        setShowStatisticsModal(false);
    }

    return (
        <div className="FeedLayout">

            <div className="FeedLayout-leftPanel-container">
                <div className="FeedLayout-AppName">
                    <span>VolUN</span>
                    <FaHandshake className="FeedLayout-AppName-icon" />
                </div>

                <div className="FeedLayout-ModalFilters">

                    <div className="FeedLayout-Data-Container">
                        <span className="FeedLayout-Span">Categories</span>
                        <div className="FeedLayout-line"/>

                        <div className="FeedLayout-Categories">
                            <div className="FeedLayout-Category-Container">
                                <div 
                                    className={`FeedLayout-Category ${(teach) ? 'active' : 'inactive'} teach pointer`}
                                    onClick={() => setTeach(!teach)}
                                >
                                    <FaBook className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Teaching & Learning</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(heart) ? 'active' : 'inactive'} heart pointer`}
                                    onClick={() => setHeart(!heart)}
                                >
                                    <FaHeart className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Health & Wellness</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(users) ? 'active' : 'inactive'} users pointer`}
                                    onClick={() => setUsers(!users)}
                                >
                                    <FaUsers className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Social Assistance</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(hands) ? 'active' : 'inactive'} hands pointer`}
                                    onClick={() => setHands(!hands)}
                                >
                                    <FaHands className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Humanitarian Aid</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(leaf) ? 'active' : 'inactive'} leaf pointer`}                                    
                                    onClick={() => setLeaf(!leaf)}
                                >
                                    <FaLeaf className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Ambiental Help</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(ball) ? 'active' : 'inactive'} ball pointer`}                                
                                onClick={() => setBall(!ball)}
                                >
                                    <FaVolleyballBall className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Sport Support</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(paw) ? 'active' : 'inactive'} paw pointer`}                              
                                 onClick={() => setPaw(!paw)}
                                >
                                    <FaPaw className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Animals Care</span>
                            </div>

                            <div className="FeedLayout-Category-Container">
                                <div className={`FeedLayout-Category ${(paint) ? 'active' : 'inactive'} paint pointer`}
                                    onClick={() => setPaint(!paint)}
                                >
                                    <FaPaintBrush className="FeedLayout-Category-Icon" />
                                </div>
                                <span>Make Culture</span>
                            </div>
                        </div>
                    </div>

                    <div className="FeedLayout-Data-Container">
                        <span className="FeedLayout-Span">Information</span>
                        <div className="FeedLayout-line"/>

                        <div>
                            {(userType !== 'NON_PROFIT') && (
                            <div className="FeedLayout-Info-Container pointer">
                                <CgOrganisation className="FeedLayout-Info-Icon" />
                                <div className="FeedLayout-Input">
                                    <select 
                                        onChange={(e) => setOrganization(e.target.value)} 
                                        value={organization}
                                    >
                                        <option value={''} disabled>Organization</option>
                                        {getOptions()}
                                    </select>
                                    <div className="FeedLayout-input-line org"/>
                                </div>
                            </div>
                            )}

                            <div className="FeedLayout-Info-Container">
                                <FaCalendar className="FeedLayout-Info-Icon" />
                                <div className="FeedLayout-Input">
                                    <DatePicker 
                                        className="FeedLayout-Input-datePicker"
                                        selected={date}
                                        onChange={(e) => setDate(e)}
                                    />
                                    <div className="FeedLayout-input-line date"/>
                                </div>
                            </div>

                            <div className="FeedLayout-Info-Container">
                                <FaClock className="FeedLayout-Info-Icon" />
                                <div className="FeedLayout-Input">
                                    <TimePicker 
                                        className="FeedLayout-Input-timePicker"
                                        onChange={(e) => setTime(e)} 
                                        value={time} 
                                    />
                                    <div className="FeedLayout-input-line minus time"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button 
                        className="FeedLayout-Btn-Filter pointer"
                        onClick={filterPost}
                    >
                        Filter
                    </button>

                </div>

                <div 
                    className="FeedLayout-Logout pointer"
                    onClick={logout}
                >
                    <FiLogOut className="FeedLayout-Logout-icon"/>
                    <span>Logout</span>
                </div>
            </div>
            
            <div className="FeedLayout-content">
                <div className="FeedLayout-header">
                    {(userType === 'ADMIN') && (
                        <div 
                            className="FeedLayout-counting pointer"
                        >
                            <div className="FeedLayout-counting-row">
                                <div className="FeedLayout-counting-circle"></div>
                                <span className="white">
                                    Posts
                                </span>
                                <span className="blue">
                                    {`${postCount}`}
                                </span>
                            </div>
                            <div className="FeedLayout-counting-row">
                                <div className="FeedLayout-counting-circle"></div>
                                <span className="white">
                                    Users
                                </span>
                                <span className="blue">
                                    {`${usersCount}`}
                                </span>
                            </div>
                            <div className="FeedLayout-counting-line"/>
                            <span className="blue bold">
                                Counting
                            </span>
                        </div>
                    )}

                    {(userType === 'ADMIN' || userType === 'NON_PROFIT') && (
                        <div 
                            className="FeedLayout-startPost pointer"
                            onClick={()=> setShowCreateModal(true)}
                        >
                            <MdPostAdd className="FeedLayout-startPost-Icon"/>
                            <div className="FeedLayout-startPost-lavanda">
                                Start a Post
                            </div>
                        </div>
                    )}

                    {(userType === 'ADMIN') && (
                        <div 
                            className="FeedLayout-statisticsButton pointer"
                            onClick={()=> setShowStatisticsModal(true)}
                        >
                            <FaChartPie className="FeedLayout-statistics-Icon"/>
                            <span>See Statistics</span>
                        </div>
                    )}
                </div>

                {(loaddingPosts) && (<div className='spinner lavanda'></div>)}

                <Outlet />
            </div>

            {(showCreateModal) && (<ModalCreatePost reloadOffers={reloadOffers} show={showCreateModal} handleClose={handleCloseModal}/>)}
            {(showStatisticsModal) && (<ModalStatistics show={showStatisticsModal} handleClose={handleCloseModalStatistics}/>)}

        </div>
    );
}

export default FeedLayout;
