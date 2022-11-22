import './ModalSeePost.modules.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md";
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { deleteOferta } from '../../api/offers';

export const categories = {
    "teach": "Teaching & Learning",
    "heart": "Heart & Wellness",
    "users": "Social Assistance",
    "hands": "Humanitarian Aid",
    "leaf": "Ambiental Help",
    "ball": "Sport Support",
    "paw": "Animals Care",
    "paint": "Make Culture",
}

function ModalSeePost(props) {

    const { show, handleClose, post, userType, setShowUpdatePost, reloadOffers } = props;

    const buttonText = () => {
        if (post.status === 'going') {
            return "You're in!"
        }

        if (post.status === 'pending') {
            return 'Pending'
        }

        return 'Apply'
    }

    const getCategory = () => {
        switch (post.category) {
            case "teach":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaBook className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title little`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "heart":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaHeart className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title little`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "users":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaUsers className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title little`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "hands":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaHands className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title little`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "leaf":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaLeaf className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "ball":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaVolleyballBall className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "paw":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaPaw className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            case "paint":
              return <div className={`ModalSeePost-category ${post.category}`}>
                      <FaPaintBrush className={`ModalSeePost-category-icon`}/>
                      <span className={`ModalSeePost-category-title`}>
                        {categories[post.category]}
                      </span>
                    </div>
              break;
            default:
              return <></>;
              break;
          }
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

    const handleDelete = () => {
      deleteOferta(post.id)
        .then((results) => {
          if(results){
            toast.success(`Post deleted.`)
            reloadOffers();
            handleClose();
          }
          else{
            toast.error(`Error deleting post.`)
          }
        })
        .catch((err) => {
          toast.error(`Error deleting post.`);
          console.log(err);
        })
    }

    const handleUpdate = () => {
      setShowUpdatePost(true);
      handleClose();
    }

    const applyPost = () => {
        if (post.status === 'any') {

        }
        //reload post after apply
    }

    return (
        <Modal show={show} onHide={handleClose} centered >
          <div className="ModalSeePost-row">
            <div className={`modal-color ${post.category}`}>
                <Modal.Header className="ModalSeePost-header">
                    <img 
                        src={(post.image && post.image !== '') ? post.image : getPostImageGeneral()}
                        className={`ModalSeePost-image ${post.category}`}
                    />
                    <div className={`ModalSeePost-category-container ${post.category}`}>
                        {getCategory()}
                    </div>
                </Modal.Header>
                <Modal.Body className="ModalSeePost-body">
                    <h1>{post.title || ''}</h1>
                    <h2>{post.nonProfitName || ''}</h2>
                    <span>{post.description || ''}</span>
                </Modal.Body>
                <Modal.Footer className="ModalSeePost-footer">

                    <div className="Post-information">
                        <div className="Post-info-container">
                            <FaCalendar className="Post-info-Icon" />
                            <span>{(post.date || '').slice(0, 10)}</span>
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

                    {(userType === 'VOLUNTEER') ? (
                        <Button
                            className={`ModalSeePost-Apply-btn ${post.status || ''}`}
                            onClick={applyPost}
                        >
                            {buttonText()}
                        </Button>
                    ) : (
                        <div className="ModalSeePost-btn">
                            <Button 
                                onClick={handleDelete}
                                className={`ModalSeePost-Admin-btn delete`}
                            >
                                Delete
                            </Button>
                            <Button 
                                onClick={handleUpdate}
                                className={`ModalSeePost-Admin-btn update`}
                            >
                                Update
                            </Button>
                        </div>
                    )}

                </Modal.Footer>
            </div>

            {(userType !== 'VOLUNTEER') && (
            <div className={`modal-color ${post.category} statistics`}> 
              <span>Hola</span>
            </div>
            )}
          </div>
            
        </Modal>
    );
}

export default ModalSeePost;
