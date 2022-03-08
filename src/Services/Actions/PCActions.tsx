import { ActionTypes } from '../Constants/ActionTypes';

export const setPcItems = (items: any) => {
    return {
        type :ActionTypes.SET_PCITEMS,
        payload : items
    }
};