import './ModalCreatePost.modules.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";
import { getTimeNow } from "../../containers/FeedLayout/FeedLayout";
import { toast } from 'react-toastify';
import {updateOferta} from '../../api/offers';

function ModalUpdatePost(props) {

    const { show, handleClose, post, loaddingUpdate, setLoaddingUpdate,reloadOffers } = props;

    const [image, setImage] = useState(post.image || ''); /*@todo */
    const [title, setTitle] = useState(post.title || '');
    const [date, setDate] = useState((post.date) ? new Date(post.date): new Date());
    const [time, setTime] = useState(post.time || getTimeNow());
    const [location, setLocation] = useState(post.location || '');
    const [category, setCategory] = useState(post.category || '');
    const [description, setDescription] = useState(post.description || '');

    const update = () => {

        if (title === '') {
            toast.error('Please add a title.');
            return;
        }

        if (location === '') {
            toast.error('Please add a location.');
            return;
        }

        if (category === '') {
            toast.error('Please select a category.');
            return;
        }

        setLoaddingUpdate(true);
        updateOferta(post.id,{
            title: title,
            description: description,
            location: location,
            date: date,
            time: time,
            category: category,
            image: image,
            nonProfitUsername: localStorage.getItem('username') || '', 
            nonProfitName: localStorage.getItem('nameUser') || '',
        })
            .then((results) => {
                if(results){
                    toast.success('Post updated.');
                    reloadOffers();
                    handleClose();
                }
                else{
                    toast.error('Error updating the post');
                }
            })
    }

    const handleCloseModal = () => {
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <div className="ModalCreatePost-border-container">
                <Modal.Header closeButton>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className="ModalCreatePost-container">
                    <div className="ModalCreatePost-image-container">
                        {(image !== '') ? (
                            <img src={image || ''} className="ModalCreatePost-image" />
                        ) : (
                            <>
                                <input
                                    type="file"
                                    id="file"
                                    className="ModalCreatePost-input-file"
                                    onChange={(e) => setImage(e.target) /*@todo */}
                                    accept="image/*"
                                />

                                <FaImage className="ModalCreatePost-image-icon" />
                            </>
                        )}
                    </div>

                    <div className="ModalCreatePost-info-container">
                        <input
                            type="text"
                            className="ModalCreatePost-input"
                            placeholder="Title*"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="ModalCreatePost-input-line" />

                        <div className="ModalCreatePost-info-container double">
                            <div className="ModalCreatePost-info-container">
                                <DatePicker
                                    className="FeedLayout-Input-datePicker"
                                    selected={date}
                                    onChange={(e) => setDate(e)}
                                />
                                <div className="ModalCreatePost-input-line" />
                            </div>
                            <div className="ModalCreatePost-info-container">
                                <TimePicker
                                    className="FeedLayout-Input-timePicker"
                                    onChange={(e) => setTime(e)}
                                    value={time}
                                />
                                <div className="ModalCreatePost-input-line" />
                            </div>
                        </div>

                        <div className="ModalCreatePost-info-container double">
                            <div className="ModalCreatePost-info-container">
                                <input
                                    type="text"
                                    className="ModalCreatePost-input more-up"
                                    placeholder="Location*"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <div className="ModalCreatePost-input-line" />
                            </div>
                            <div className="ModalCreatePost-info-container">
                                <select
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                >
                                    <option value={''} disabled>Select Category*</option>
                                    <option value={'teach'}>Teaching & Learning</option>
                                    <option value={'heart'}>Health & Wellness</option>
                                    <option value={'users'}>Social Assistance</option>
                                    <option value={'hands'}>Humanitarian Aid</option>
                                    <option value={'leaf'}>Ambiental Help</option>
                                    <option value={'ball'}>Sport Support</option>
                                    <option value={'paw'}>Animals Care</option>
                                    <option value={'paint'}>Make Culture</option>
                                </select>
                                <div className="ModalCreatePost-input-line" />
                            </div>
                        </div>

                        <textarea
                            className="ModalCreatePost-description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>

                        </textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer className="ModalCreatePost-btn">
                    <Button onClick={handleCloseModal} className="ModalCreatePost-btn-cancel">
                        Cancel
                    </Button>
                    <Button onClick={update} className="ModalCreatePost-btn-create">
                        {loaddingUpdate ? (
                            <div className='spinner'></div>
                        ) : ('Update')}
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ModalUpdatePost;
