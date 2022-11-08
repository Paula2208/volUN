import './FeedLayout.modules.css';
import { Outlet, useNavigate } from "react-router-dom";
import { FaHandshake, FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import {MdPostAdd} from "react-icons/md";
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ModalCreatePost from '../../components/createPost/ModalCreatePost';

export const getTimeNow = () => {
    const date = new Date();
    return date.getHours() + ':' + date.getMinutes();
}

function FeedLayout(props) {

    const {userType, setUserType, setIsLogged, setPosts} = props;

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

    const[organizations, setOrganizations] = useState([{name: 'organization 1', username: 'org1'},{name: 'organization 2', username: 'org2'}]); //@todo

    const[loaddingPosts, setLoaddingPosts] = useState(false);
    const[showCreateModal, setShowCreateModal] = useState(false);

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
                    {(userType !== 'VOLUNTEER') && (
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
                        <div className="FeedLayout-statisticsButton">
                            {/*@todo para el sprint 3 */}
                        </div>
                    )}
                </div>

                {(loaddingPosts) && (<div className='spinner lavanda'></div>)}

                <Outlet />
            </div>

            {(showCreateModal) && (<ModalCreatePost  show={showCreateModal} handleClose={handleCloseModal}/>)}

        </div>
    );
}

export default FeedLayout;
