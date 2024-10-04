import axios from 'axios';

const API_BASE_URL = '/http://localhost:8080'; 

export const getData = async () => {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
};

