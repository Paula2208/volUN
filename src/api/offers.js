import Axios from 'axios';

export const createOferta = () => new Promise((resolve, reject) => {
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/offers/create`).then((results) => {
        if(results.status === 200){
            resolve(true);
        }
        else{
            resolve(false);
        }
    })
});

export const getOfertas = () => new Promise((resolve, reject) => {

    Axios.get(`${process.env.REACT_APP_API_URL_V1}/offers/get`).then((results) => {
        
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

            
export const deleteOferta = (id) => new Promise ((resolve, reject) => {
    Axios.delete(`${process.env.REACT_APP_API_URL_V1}/offers/delete`,id).then((results) => {
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

export const updateOferta = (id) => new Promise ((resolve, reject) => {
    Axios.put(`${process.env.REACT_APP_API_URL_V1}/offers/update`,3).then((results) => {
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