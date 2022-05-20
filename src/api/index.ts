import axios from 'axios';

const BASE = 'https://api.github.com';

const axiosInstance = axios.create({
    baseURL: BASE
});

export const api = {
    get: async () => {
        const response = await axiosInstance.get(`/users/euygor`);
        return response.data;
    }
}