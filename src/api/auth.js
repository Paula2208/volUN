import Axios from 'axios';

export const createUser = (
    name, 
    lastName, 
    email, 
    cellphoneNumber,
    username, 
    password, 
    accountType) => new Promise((resolve, reject) => {

    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth/user`,
        {
            name: name,
            lastName: lastName,
            email: email,
            cellphoneNumber: cellphoneNumber,
            username: username,
            password: password,
            accountType: accountType
        })
        .then((results) => {
            console.log('PAU CREATE USER',results); //@audit
            resolve(true);
        })
        .catch(err => {
            reject(false);
        })
});

export const login = (
    username,
    password
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth`,
        {
            "username": username,
            "password": password
        })
        .then((results) => {
            
            resolve(results.data); 
        })
        .catch(err => {
            reject(false);
        })
});