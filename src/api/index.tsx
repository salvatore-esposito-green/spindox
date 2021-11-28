import axios from 'axios';

const index = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export default index;