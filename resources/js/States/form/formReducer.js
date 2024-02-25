import {ADD_EMAIL} from "./formTypes";

const initialState = {
    email: "",
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
};

export default formReducer;