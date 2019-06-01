import axios from 'axios';
import {ToastAndroid} from 'react-native';

export const GetRequest = (URL, Paramters=null, _SuccessCall, Message) => {
    axios.get(URL)
    .then(response => {
        if(Message){
            displayMessage(Message);
        }
        _SuccessCall(response.data);
    })
    .catch(error => {
        if(error.message){
            displayMessage(error.message);
            if(error.message=="Network Error"){
                setTimeout(() => {GetRequest(URL, Paramters, _SuccessCall, Message)}, 1000)
            }
        }
    });
};

export const PostRequest = (URL, Paramters=null, _ResponseCall=null, Message) => {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "api-token":"test",
        }
      };

    axios.post(
        URL,Paramters,axiosConfig)
    
    .then(response => {
        if(Message){
            displayMessage(Message);
        }
        if(_ResponseCall){
            _ResponseCall(response.data);
        }
    })
    .catch(error => {
        if(error.message){
            displayMessage(error.message);
        }
        if(_ResponseCall){
            _ResponseCall(error);
        }
    });
};

export const displayMessage = (Message) =>{
    ToastAndroid.showWithGravityAndOffset(
        Message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
};