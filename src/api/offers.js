import Axios from 'axios';

export const getOfertas = () => new Promise((resolve, reject) => {

    Axios.get(`${process.env.REACT_APP_API_URL_V1}/offers/get`).then((response) => {
        console.log(response);
    });
});

            

