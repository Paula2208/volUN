import './ModalSeePost.modules.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalSeePost(props) {

    const {show, handleClose, post} = props;

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{`Post Title: ${post.title || ''}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleClose}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalSeePost;
