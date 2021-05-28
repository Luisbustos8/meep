import axios from 'axios';

const config = 'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,- 9.137115&companyZoneIds=545,467,473'
const client = axios.create(config);

client.interceptors.response.use(
    response => response.data, 
    error => {
        if (!error.response) {
           return Promise.reject({message: error.message})
    }
    return Promise.reject({
        message: error.response.statusText,
        ...error.response.data,
    })
});