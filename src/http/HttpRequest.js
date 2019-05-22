import React from 'react';
import axios from 'axios';

export const axiosRequest = (URL , timeout = 20000, body , type , _successHandler ,_failHandler ,_connectionFailHandler , headers = null) => {
    const axios_request = axios.create();
    axios_request.defaults.timeout = timeout;
    if(type === "post")
        return axios_request.post(URL , body , headers)
            .then(resp =>
            {
                if(!resp.data[0].status) //if the status = false then there's some error happended
                {
                    _failHandler();
                }
                else // success Handler
                {
                    _successHandler(resp.data[0].data);
                }
            })
            .catch(function (error)
            {
                _connectionFailHandler();
            }.bind(this));
    else if(type === 'get')
        return axios_request.get(URL,body)
            .then(resp =>
            {
                if(!resp.data[0].status) //if the status = false then there's some error happended
                {
                    _failHandler();
                }
                else // success Handler
                {
                    _successHandler(resp.data[0].data);
                }
            })
            .catch(function (error)
            {
                _connectionFailHandler();
            }.bind(this));
    else if(type === 'delete')
        axios_request.delete(URL,body)
            .then(resp =>
            {
                if(!resp.data[0].status) //if the status = false then there's some error happended
                {
                    _failHandler();
                }
                else // success Handler
                {
                    _successHandler(resp.data[0].data);
                }
            })
            .catch(function (error)
            {
                _connectionFailHandler();
            }.bind(this));
};
//make http request using fetch library
export const fetchRequest = (URL , body , _successHandler ,_failHandler ,_connectionFailHandler) => {
    fetch(URL,body)
        .then(resp => resp.json())
        .then((response) => {
            if (!response[0].status)//if status = false then some error happen handle the error
            {
                _failHandler();
            }
            else // success handler
                _successHandler(response[0].data);
        })
        .catch(function (error){
            //it's optional to pass data to the _connection handler here we are passing the data of the file fo re uploading later
            _connectionFailHandler(body.body);
        });
};