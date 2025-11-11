import axios from 'axios'
import React from 'react'

const axiosInstance = axios.create({
    baseURL : "http://localhost:8080"
});



export default axiosInstance;