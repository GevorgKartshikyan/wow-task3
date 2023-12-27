import axios from 'axios';
const {REACT_APP_API_URL} = process.env;

const api = axios.create({
    baseURL: REACT_APP_API_URL,
});

class Api {
    static getHomePageData() {
        return api.get('/api')
    }
}

export default Api;
