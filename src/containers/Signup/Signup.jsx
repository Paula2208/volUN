import './Signup.modules.css';
import { useState } from "react";
import { createUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Signup() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleCreate = (e) => {

        if (name === '') {
            toast.error("Please add a name");
            return
        }

        if (lastName === '') {
            toast.error("Please add a last name");
            return
        }

        if (email === '') {
            toast.error("Please add an email");
            return
        }

        if (cellphoneNumber === '') {
            toast.error("Please add a cellphoneNumber");
            return
        }

        if (username === '') {
            toast.error("Please add a username");
            return
        }

        if (password === '') {
            toast.error("Please add a password");
            return
        }

        if (accountType === '') {
            toast.error("Please select an accountType");
            return
        }

        setLoading(true);

        createUser(name, lastName, email, cellphoneNumber, username, password, accountType)
            .then((results) => {
                if (results === true) {
                    toast.success("User created!");
                    navigate("../");
                    setLoading(false);
                }
                else {
                    toast.success("Error creating user. Try again later!");
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    toast.error(err.response.data);
                }
                else {
                    toast.error('Something were wrong.');
                }
                setLoading(false);
            });
    }

    const handleCancel = (e) => {
        setName('');
        setLastName('');
        setEmail('');
        setCellphoneNumber('');
        setUsername('');
        setPassword('');
        setAccountType('');
        navigate("../");
    }

    return (
        <div className="Signup-title">
            <div className='informacion'>

                <div className='Signup-double'>
                    <div className='Signup-container'>
                        <input
                            type='text'
                            className="Signup-input"
                            placeholder="First Name*"
                            onChange={(event) => { setName(event.target.value); }} />
                        <div className="Signup-input-line" />
                    </div>
                    <div className='Signup-container'>
                        <input
                            type='text'
                            className="Signup-input"
                            placeholder="Last Name*"
                            onChange={(event) => { setLastName(event.target.value); }} />
                        <div className="Signup-input-line" />
                    </div>
                </div>

                <div className='Signup-double'>
                    <div className='Signup-container'>
                        <input
                            type='text'
                            className="Signup-input"
                            placeholder="Email*"
                            onChange={(event) => { setEmail(event.target.value); }} />
                        <div className="Signup-input-line" />
                    </div>
                    <div className='Signup-container'>
                        <input
                            className="Signup-input"
                            type='text'
                            placeholder="Phonenumber*"
                            onChange={(event) => { setCellphoneNumber(event.target.value); }} />
                        <div className="Signup-input-line" />
                    </div>
                </div>

                <div className='Signup-double'>
                    <div className='Signup-container'>
                        <input
                            type='text'
                            className="Signup-input"
                            placeholder="Username*"
                            onChange={(event) => { setUsername(event.target.value); }} />
                        <div className="Signup-input-line" />
                    </div>
                    <div className='Signup-container'>
                        <input
                            type='password'
                            className="Signup-input"
                            placeholder="Password*"
                            onChange={(event) => { setPassword(event.target.value); }} />
                        <div className="Signup-input-line" />
                    </div>
                </div>

                <div className='Signup-container select'>
                    <select
                        onChange={(e) => setAccountType(e.target.value)}
                        value={accountType}
                        className="Signup-select"
                    >
                        <option value="" disabled>Select user type*</option>
                        <option value="VOLUNTEER">Volunteer</option>
                        <option value="NON_PROFIT">Non Profit</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                    <div className="Signup-input-line select" />
                </div>

                <div className="Signup-buttons">
                    <button
                        className="Signup-btn-create"
                        onClick={handleCreate}
                    >
                        {loading ? (
                            <div className='spinner'></div>
                        ) : ('Signup')}
                    </button>
                    <button
                        className="Signup-btn-cancel"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>

    );
}

export default Signup;