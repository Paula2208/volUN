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

            if(results.status === 200){
                resolve(true);
            }
            else{
                resolve(false);
            }
        })
        .catch(err => {
            reject(false);
        })
});

export const login = (
    username,
    password,
    setIsLogged
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth`,
        {
            "username": username,
            "password": password
        })
        .then((results) => {
            if(results.data === true){
                setIsLogged(true);
                localStorage.setItem('logged', true);
                localStorage.setItem('username', username);
            }

            resolve(results.data); 
            return;
        })
        .catch(err => {
            reject(false);
        })
});