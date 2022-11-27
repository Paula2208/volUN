import Axios from 'axios';

export const getNumberOfPosts = () => new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/statistics/getNumberOfPosts`).then((results) => {
        if(results.status === 200){
            resolve(results.data[0]);
        }
        else{
            resolve(0);
        }
    })
    .catch(err => {
        reject(err);
    })
});

export const getNumberOfUsersPerType = () => new Promise((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/statistics/getNumberOfUserType`).then((results) => {
        if(results.status === 200){
            resolve({
                ...results.data.orgs[0],
                ...results.data.volunteers[0]
            });
        }
        else{
            resolve(0);
        }
    })
    .catch(err => {
        reject(err);
    })
});