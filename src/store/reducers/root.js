/*
    Author:TMT
 */
//the state which will start our application with
import {EXAMPLE} from "../actions/actionTypes";

const initialState = {

};

//reducer take the old state and the action which will be the reason to change the old state to new one
const reducer = (oldState = initialState , action) => {
    switch(action.type)
    {
        default:
            return oldState;
    }
};

export default reducer;