import {ADD_EMAIL} from "./formTypes";

export const addEmail = (email) => {
    console.log('success add email');
    return {
        type: ADD_EMAIL,
        payload: email,
    };
};
