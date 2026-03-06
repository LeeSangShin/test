import axios from 'axios';

export default function customAxios(url, callback){
    axios(
        {
            url:'/test'+url,
            method:'post',
            baseURL: 'http://localhost:8000',
            withCredentials: true
        }
    ).then(function(response){
        callback(response.data);
    });
}