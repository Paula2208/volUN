import './ModalCreatePost.modules.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";
import { getTimeNow } from "../../containers/FeedLayout/FeedLayout";
import { toast } from 'react-toastify';
import {createOferta} from "../../api/offers"

function ModalCreatePost(props) {

    const { show, handleClose, reloadOffers } = props;

    const [image, setImage] = useState(''); /*@todo */
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(getTimeNow());
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const [loaddingCreate, setLoaddingCreate] = useState(false);

    const create = () => {

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

        setLoaddingCreate(true);
        createOferta({
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
                toast.success('Post created successfully!');
                cancel();
                reloadOffers();
            }
            else{
                toast.error('Error creating post.')
            }
        })
        .catch(err => {
            toast.error('Error creating post.')
            console.log(err);
        })
    }

    const cancel = () => {
        setImage('');
        setTitle('');
        setDate(new Date());
        setTime(getTimeNow());
        setLocation('');
        setCategory('');
        handleClose();
        setLoaddingCreate(false);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <div className="ModalCreatePost-border-container">
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
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
                    <Button onClick={cancel} className="ModalCreatePost-btn-cancel">
                        Cancel
                    </Button>
                    <Button onClick={create} className="ModalCreatePost-btn-create">
                        {loaddingCreate ? (
                            <div className='spinner'></div>
                        ) : ('Create')}
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ModalCreatePost;
