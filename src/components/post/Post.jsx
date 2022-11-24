import './Post.modules.css';
import React, { useState } from 'react';
import ModalSeePost from '../ModalSeePost/ModalSeePost'
import { FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import ModalUpdatePost from "../createPost/ModalUpdatePost";
import {getDate} from '../../helpers/inputHelpers';

function Post(props) {

    const { post, userType, reloadOffers, cleanFilters, setCleanFilters } = props;

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

    const getPostImageGeneral = () => {
        switch (post.category) {
          case "teach":
            return "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "heart":
            return "https://images.pexels.com/photos/7475697/pexels-photo-7475697.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "users":
            return "https://images.pexels.com/photos/7345449/pexels-photo-7345449.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "hands":
            return "https://images.pexels.com/photos/6646989/pexels-photo-6646989.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "leaf":
            return "https://images.pexels.com/photos/7656138/pexels-photo-7656138.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "ball":
            return "https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "paw":
            return "https://images.pexels.com/photos/6131165/pexels-photo-6131165.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          case "paint":
            return "https://images.pexels.com/photos/1507856/pexels-photo-1507856.jpeg?auto=compress&cs=tinysrgb&w=800"
            break;
          default:
            return "https://images.pexels.com/photos/5340269/pexels-photo-5340269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            break;
        }
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
                    src={(post.image && post.image !== '') ? post.image : getPostImageGeneral()}
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
                            <span>{getDate(post.date || '')}</span>
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
                reloadOffers={reloadOffers}
                cleanFilters={cleanFilters}
                setCleanFilters={setCleanFilters}
            />)}
            
            {(showUpdatePost) && (
                <ModalUpdatePost  
                show={showUpdatePost} 
                handleClose={handleCloseModalUpdate}
                loaddingUpdate={loaddingUpdate}
                setLoaddingUpdate={setLoaddingUpdate}
                post={post}
                reloadOffers={reloadOffers}
                />
            )}
        </>
    );
}

export default Post;
