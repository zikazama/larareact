import {ADD_EMAIL} from "./formTypes";

export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        payload: email,
    };
};
