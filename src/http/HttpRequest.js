import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {_storeData,_retrieveData} from '../includes/Storage';

export const GetRequest = (URL, Paramters=null, _SuccessCall, Message) => {

    _retrieveData('api_token').then(key => {
        if(key!=null && key!= "undefined"){
            const AuthStr = 'Bearer '.concat(key);

            let axiosConfig = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization" : AuthStr,
                }
              };

            axios.get(URL,axiosConfig)
            .then(response => {
                if(response.data.message != null || response.data.message != ""){
                    displayMessage(response.data.message);
                }
                if(Message){
                    displayMessage(Message);
                }
                _SuccessCall(response.data.data);
            })
            .catch(error => {
                if(error.message){
                    displayMessage(error.message);
                    if(error.message=="Network Error"){
                        setTimeout(() => {GetRequest(URL, Paramters, _SuccessCall, Message)}, 1000)
                    }
                }
            });
        }
        else{
            displayMessage("Authentication failed");
        }
    });
};

export const PostRequest = (URL, Paramters=null, _ResponseCall=null, Message) => {

    _retrieveData('api_token').then(key => {
    
        const AuthStr = 'Bearer '.concat(key);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization" : AuthStr,
            }
        };

        axios.post(
            URL,Paramters,axiosConfig)
        
        .then(response => {
            if(response.data.message != null || response.data.message != ""){
                displayMessage(response.data.message);
            }
            if(Message){
                displayMessage(Message);
            }
            if(_ResponseCall){
                _ResponseCall(response.data.data);
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
    });
};

export const displayMessage = (Message) =>{
    if(Message != undefined && Message != ""){
        ToastAndroid.showWithGravityAndOffset(
            Message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }
};