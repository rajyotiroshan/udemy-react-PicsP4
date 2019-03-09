import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 940166052fabfd53a01780b3fd3363db5b431f84e31906f6f57fc0cbda806552'
    }
});