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
            reject(err);
        })
});

export const login = (
    username,
    password,
    setIsLogged, 
    setUsername
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
                setUsername(username);
            }
            resolve(results.data); 
            return;
        })
        .catch(err => {
            reject(err);
        })
});

export const getUser = (
    setUserType,
    setCleanFilters
) => new Promise((resolve, reject) => {
    
    if(localStorage.getItem('username') !== ''){
        Axios.get(`${process.env.REACT_APP_API_URL_V1}/auth/${localStorage.getItem('username') || ''}`)
            .then((results) => {

                if(results.data === false){
                    console.log('Error getting user.')
                }
                else{
                    localStorage.setItem('nameUser', `${results.data.name} ${results.data.lastName}`);
                    localStorage.setItem('userType', results.data.accountType);
                    setUserType(results.data.accountType);
                    setCleanFilters(true);
                }

                resolve(results.data); 
                return;
            })
            .catch(err => {
                reject(err);
            })
    }
});


export const forgotPassword = (
    email
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth/forgotPassword`,{
        email: email
    })
        .then((results) => {
            if(results.status === 200){
                resolve(results.data);
                console.log("sucess!");
                
            }
            else{
                resolve([]);
                console.log("fail!");
            }
        })
        .catch(err => {
            reject(err);
        })
});

export const apply = (
    username,
    postId
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth/apply`,
        {
            "username": username,
            "id": postId
        })
        .then((results) => {
            resolve(results.data)
        })
        .catch(err => {
            reject(err);
        })
});

export const changeApply = (
    username,
    postId, 
    status
) => new Promise((resolve, reject) => {
    
    Axios.put(`${process.env.REACT_APP_API_URL_V1}/auth/apply`,
        {
            "username": username,
            "id": postId,
            "status": status
        })
        .then((results) => {
            resolve(results.data)
        })
        .catch(err => {
            reject(err);
        })
});

export const sendForgotPasswordCode = (
    email
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth/send-code-forgot`,
        {
            "email": email,
        })
        .then((results) => {
            resolve(results.status);
        })
        .catch(err => {
            reject(err);
        })
});

export const checkPasswordCode = (
    code
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth/check-code-forgot`,
        {
            "code": code,
        })
        .then((results) => {
            resolve(results.data);
        })
        .catch(err => {
            reject(err);
        })
});

export const changePassword = (
    password,
    email,
    code
) => new Promise((resolve, reject) => {
    
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/auth/retrieve-password`,
        {
            "email": email,
            "code" : code,
            "password" : password
        })
        .then((results) => {
            resolve(results.data)
        })
        .catch(err => {
            reject(err);
        })
});