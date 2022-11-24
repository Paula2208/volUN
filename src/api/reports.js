import Axios from 'axios';

export const functionTemplate = () => new Promise((resolve, reject) => {

    Axios.post(`${process.env.REACT_APP_API_URL_V1}/`, //add route and change method
        {}) //add or delete body
        .then((results) => {
            
        })
        .catch(err => {
            
        })
});


export const postReportsActive = (postId) => new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/reports/postReportsActive/${postId}`).then((results) => {
        if(results.status === 200){
            resolve(results.data);
        }
        else{
            resolve([]);
        }
    })
    .catch(err => {
        reject(false);
    })
});

export const postReportsPending = (postId) => new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/reports/postReportsPending/${postId}`).then((results) => {
        if(results.status === 200){
            resolve(results.data);
        }
        else{
            resolve([]);
        }
    })
    .catch(err => {
        reject(false);
    })
});

export const postReportsDenied = (postId) => new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/reports/postReportsDenied/${postId}`).then((results) => {
        if(results.status === 200){
            resolve(results.data);
        }
        else{
            resolve([]);
        }
    })
    .catch(err => {
        reject(false);
    })
});