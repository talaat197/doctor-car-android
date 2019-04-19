import {createStore , combineReducers} from 'redux';
import reducer from './reducers/root';
//combineReducers combine multiple reducer into one reducer
const rootReducer = combineReducers(
    {
        //map any keys of my choice to my reducer
        root: reducer
    }
);

//let's create our store

const configStore = () => {
    // it takes one single reducer which could be multiple combined reducer
  return createStore(rootReducer);
};

export default configStore;