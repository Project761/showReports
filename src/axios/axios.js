import axios from "axios";

const api = axios.create({
    baseURL: 'https://rmsapi2.arustu.com/api/', // Replace with your API base URL
    // timeout: 10000, // Set timeout to 10 seconds
});

export default api;