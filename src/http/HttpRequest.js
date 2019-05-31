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

export const displayMessage = (Message) =>{
    ToastAndroid.showWithGravityAndOffset(
        Message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
};