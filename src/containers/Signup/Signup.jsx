
import './Signup.modules.css';
import {useState} from "react";
import Axios from 'axios';

function Signup() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');

    const createUser = () => {
        Axios.post('http://localhost:2022/v1/auth/user',
            {name: name,
                lastName: lastName,
                email: email,
                cellphoneNumber: cellphoneNumber,
                password: password,
                accountType: accountType}).then(() => {
            console.log('success!');
        })
    };


    return (
        <div className="Signup-title">
            <div className = 'informacion'>
                <h1>Aqui el Signup</h1>
                <label>Primer Nombre:</label>
                <input type='text'
                       onChange={(event)=>{setName(event.target.value);}}/>
                <label>Apellido:</label>
                <input type='text'
                       onChange={(event)=>{setLastName(event.target.value);}}/>
                <label>correo</label>
                <input type='text'
                       onChange={(event)=>{setEmail(event.target.value);}}/>
                <label>numero celular:</label>
                <input type='text'
                       onChange={(event)=>{setCellphoneNumber(event.target.value);}}/>
                <label>password:</label>
                <input type='text'
                       onChange={(event)=>{setPassword(event.target.value);}}/>
                <label>tipo de cuenta</label>
                <input type='text'
                       onChange={(event)=>{setAccountType(event.target.value);}}/>
                <button onClick={createUser}> Signup</button>
            </div>
        </div>

    );
}

export default Signup;
