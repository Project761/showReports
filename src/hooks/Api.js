import { DecryptedList, EncryptedList } from "../Comman/Utility";
import api from "../axios/axios";

// ------get API Request
export const fetchData = async (url) => {

   
    try {
        const res = await api.get(url);
        
        
        const decr = DecryptedList(res.data.data)
        const TextData = JSON.parse(decr)
        return TextData.Table
    } catch (err) {
        console.log(err);
    }
};

// -------get DATA API With Post Request
export const fetchPostData = async (url, postData) => {
    try {
        console.log('Request URL:', url);
        console.log('Request Data:', postData);

        const values = EncryptedList(JSON.stringify(postData));
        console.log('Encrypted Data:', values);

        const data = {
            "Data": values
        };
        const response = await api.post(url, data);

        const decr = DecryptedList(response.data.data);
        const TextData = JSON.parse(decr);

        return TextData.Table;
    } catch (error) {
        console.error('Error in fetchPostData:', error);

        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }

        return [];
    }
};
