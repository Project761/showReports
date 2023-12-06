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
    const values = EncryptedList(JSON.stringify(postData));
    const data = {
        "Data": values
    }
    // console.log(data)
    try {
        const res = await api.get(url, data);
        // if(res.code === 'ERR_BAD_REQUEST'){
        //     return res
        // } else {
        const decr = DecryptedList(res.data.data)
        // console.log(decr)
        const TextData = JSON.parse(decr)
        // console.log(TextData);
        return TextData.Table
        // }
    } catch (error) {
        return []
    }
};