import axios from 'axios';

//base url
const instance = axios.create({
        baseURL:"http://localhost:8080/Car_Rent_System_Back_End__war/"
    }
)