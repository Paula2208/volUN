import './ModalSeePost.modules.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBook, FaHeart, FaUsers, FaHands, FaLeaf, FaVolleyballBall, FaPaw, FaPaintBrush, FaCalendar, FaClock } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

function ModalSeePost(props) {

    const { show, handleClose, post, userType } = props;

    const buttonText = () => {
        if (post.status === 'going') {
            return "You're in!"
        }

        if (post.status === 'pending') {
            return 'Pending'
        }

        return 'Apply'
    }

    const handleDelete = () => {

    }

    const handleUpdate = () => {

    }

    const applyPost = () => {
        if (post.status === 'any') {

        }
        //reload post after apply
    }

    return (
        <Modal show={show} onHide={handleClose} centered >
            <div className={`modal-color ${post.category}`}>
                <Modal.Header className="ModalSeePost-header">
                    <img 
                        src={post.image || "https://images.pexels.com/photos/5340269/pexels-photo-5340269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                        className={`ModalSeePost-image ${post.category}`}
                    />
                </Modal.Header>
                <Modal.Body className="ModalSeePost-body">Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer className="ModalSeePost-footer">

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

                    {(userType === 'VOLUNTEER') ? (
                        <Button
                            className={`ModalSeePost-Apply-btn ${post.status}`}
                            onClick={applyPost}
                        >
                            {buttonText()}
                        </Button>
                    ) : (
                        <div className="ModalSeePost-btn">
                            <Button onClick={handleDelete}>
                                Delete
                            </Button>
                            <Button onClick={handleUpdate}>
                                Update
                            </Button>
                        </div>
                    )}

                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default ModalSeePost;
