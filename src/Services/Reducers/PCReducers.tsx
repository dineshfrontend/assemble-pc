import { ActionTypes } from '../Constants/ActionTypes';
import { combineReducers } from 'redux';

export const initialState = {
 pcItems : {
    "motherboard":[],
    "ram":[],
    "cpu":[]
}
};

export const PCReducer = (state : any = initialState, { type, payload} : any ) => {
    console.log(type);
    switch(type) {
        case ActionTypes.SET_PCITEMS :
            return { ...state, pcItems: payload};
        default :
            return state;
    }
}

const reducers = combineReducers({ pcItems : PCReducer });

export default reducers;
