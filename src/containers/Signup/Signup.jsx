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
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [accountType, setAccountType] = useState('');

    const navigate = useNavigate();

    const handleCreate = (e) => {
        if(name === ''){
            toast.error("Please add a name");
            return
        }

        if(lastName === ''){
            toast.error("Please add a last name");
            return
        }

        if(email === ''){
            toast.error("Please add an email");
            return
        }

        if(cellphoneNumber){
            toast.error("Please add a cellphoneNumber");
            return
        }

        if(password === ''){
            toast.error("Please add a password");
            return
        }

        if(username === ''){
            toast.error("Please add a username");
            return
        }

        if(accountType === ''){
            toast.error("Please select an accountType");
            return
        }

        createUser(name, lastName, email, cellphoneNumber, username, password, accountType)
            .then((results) => {
                if (results === true) {
                    toast.success("User created!");
                    navigate("../");
                }
            })
            .catch(console.error)
    }

    const handleCancel = (e) => {
        setName('');
        setLastName('');
        setEmail('');
        setCellphoneNumber('');
        setPassword('');
        setAccountType('');
        navigate("../");
    }

    return (
        <div className="Signup-title">
            <div className='informacion'>

                <div>
                    <input type='text'
                        placeholder="First Name*"
                        onChange={(event) => { setName(event.target.value); }} />
                    <input type='text'
                        placeholder="Last Name*"
                        onChange={(event) => { setLastName(event.target.value); }} />
                </div>

                <div>
                    <input type='text'
                        placeholder="Email*"
                        onChange={(event) => { setEmail(event.target.value); }} />
                    <input type='text'
                        placeholder="Phonenumber*"
                        onChange={(event) => { setCellphoneNumber(event.target.value); }} />
                </div>

                <div>
                    <input type='text'
                        placeholder="Username*"
                        onChange={(event) => { setUsername(event.target.value); }} />
                    <input type='text'
                        placeholder="Password*"
                        onChange={(event) => { setPassword(event.target.value); }} />
                </div>

                <input type='text'
                    placeholder="Select user type*"
                    onChange={(event) => { setAccountType(event.target.value); }} />
                    
                <div>
                    <button onClick={handleCreate}> Signup</button>
                    <button onClick={handleCancel}> Cancel</button>
                </div>

            </div>
        </div>

    );
}

export default Signup;