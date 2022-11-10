import './Post.modules.css';
import React, { useState } from 'react';
import ModalSeePost from '../ModalSeePost/ModalSeePost'
import { FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import ModalUpdatePost from "../createPost/ModalUpdatePost";

function Post(props) {

    const { post, userType } = props;

    const [showSeePost, setShowSeePost] = useState(false);
    const [showUpdatePost, setShowUpdatePost] = useState(false);
    const [loaddingUpdate, setLoaddingUpdate] = useState(false);

    const handleCloseModal = () => {
        setShowSeePost(false);
    }

    const buttonText = () => {
        if(post.status === 'going'){
            return "You're in!"
        }

        if(post.status === 'pending'){
            return 'Pending'
        }

        return 'Apply'
    }

    const getPostCategory = () => {
        if(post.category === 'teach'){
            return <>
                    <FaBook className="Post-category-Icon teach" />
                   </>
        }

        if(post.category === 'heart'){
            return <>
                    <FaHeart className="Post-category-Icon heart" />
                   </>
        }

        if(post.category === 'users'){
            return <>
                    <FaUsers className="Post-category-Icon users" />
                   </>
        }

        if(post.category === 'hands'){
            return <>
                    <FaHands className="Post-category-Icon hands" />
                   </>
        }

        if(post.category === 'leaf'){
            return <>
                    <FaLeaf className="Post-category-Icon leaf" />
                   </>
        }

        if(post.category === 'ball'){
            return <>
                    <FaVolleyballBall className="Post-category-Icon ball" />
                   </>
        }

        if(post.category === 'paw'){
            return <>
                    <FaPaw className="Post-category-Icon paw" />
                   </>
        }

        if(post.category === 'paint'){
            return <>
                    <FaPaintBrush className="Post-category-Icon paint" />
                   </>
        }

        return <></>
    }

    const applyPost = () => {
        if(post.status === 'any'){

        }
        //reload post after apply
    }

    const handleCloseModalUpdate = () => {
        setShowSeePost(false);
        setLoaddingUpdate(false);
        setShowUpdatePost(false);
      }

    return (
        <>
            <div
                className="Post-container" id={post.post_id || ''}
            >
                <img
                    src={post.image || "https://images.pexels.com/photos/5340269/pexels-photo-5340269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    className="Post-image"
                />

                <div className="Post-Title pointer"
                    onClick={() => setShowSeePost(true)}
                >
                    {post.title || ''} 
                </div>

                <div className="Post-Category">
                    {getPostCategory()}
                </div>

                <div className="Post-bottom">
                    <div className="Post-information">
                        <div className="Post-info-container">
                            <FaCalendar className="Post-info-Icon" />
                            <span>{post.date || ''}</span>
                        </div>
                        <div className="Post-info-container">
                            <FaClock className="Post-info-Icon" />
                            <span>{post.time || ''}</span>
                        </div>
                        <div className="Post-info-container">
                            <MdLocationOn className="Post-info-Icon" />
                            <span>{post.location || ''}</span>
                        </div>
                    </div>
                    {(userType === 'VOLUNTEER') && (
                        <button 
                            className={`Post-Apply-btn ${post.status || ''}`}
                            onClick={applyPost}
                        >
                            {buttonText()}
                        </button>
                    )}
                </div>

            </div>

            {(showSeePost) && (
                <ModalSeePost 
                setShowUpdatePost={setShowUpdatePost} 
                userType={userType} 
                post={post} 
                show={showSeePost} 
                handleClose={handleCloseModal} 
            />)}
            
            {(showUpdatePost) && (
                <ModalUpdatePost  
                show={showUpdatePost} 
                handleClose={handleCloseModalUpdate}
                loaddingUpdate={loaddingUpdate}
                setLoaddingUpdate={setLoaddingUpdate}
                post={post}
                />
            )}
        </>
    );
}

export default Post;
