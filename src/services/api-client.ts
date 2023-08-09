import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8b30cf2c3f2d43b79d5b66269b212fdc'
    }
})