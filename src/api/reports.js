import Axios from 'axios';

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
        resolve([]);
        console.error(err);
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
        resolve([]);
        console.error(err);
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
        resolve([]);
        console.error(err);
    })
});

export const nonProfitReport = () => new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/reports`).then((results) => {
        if(results.status === 200){
            resolve(results.data.filter((org) => org.nonProfitUsername !== null && org.nonProfitName !== null));
        }
        else{
            resolve([]);
        }
    })
    .catch(err => {
        resolve([]);
        console.error(err);
    })
});