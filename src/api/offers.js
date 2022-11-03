import Axios from 'axios';

export const functionTemplate = () => new Promise((resolve, reject) => {

    Axios.post(`${process.env.REACT_APP_API_URL_V1}/`, //add route and change method
        {}) //add or delete body
        .then((results) => {
            
        })
        .catch(err => {
            
        })
});