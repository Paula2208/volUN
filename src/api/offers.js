import Axios from 'axios';

export const createOferta = (body) => new Promise((resolve, reject) => {
    Axios.post(`${process.env.REACT_APP_API_URL_V1}/offers/create`, body).then((results) => {
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

            
export const deleteOferta = (id) => new Promise ((resolve, reject) => {
    Axios.delete(`${process.env.REACT_APP_API_URL_V1}/offers/delete/${id}`).then((results) => {
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

export const updateOferta = (id, body) => new Promise ((resolve, reject) => {
    Axios.put(`${process.env.REACT_APP_API_URL_V1}/offers/update/${id}`, body).then((results) => {
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

export const getOfertasByCategory = (category) => new Promise ((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/offers/getOfertasByCategory/${category}`).then((results) => {
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

export const getOrganizationList = () => new Promise ((resolve, reject) => {
    Axios.get(`${process.env.REACT_APP_API_URL_V1}/offers/getOrganizationList`).then((results) => {
        if(results.status === 200){
            const set = new Set( results.data.map( JSON.stringify ) )
            const r = Array.from( set ).map( JSON.parse );
            resolve(r.filter((org) => org.nonProfitUsername !== null));
        }
        else{
            resolve([]);
        }
    })
    .catch(err => {
        reject(false);
    })
    
});