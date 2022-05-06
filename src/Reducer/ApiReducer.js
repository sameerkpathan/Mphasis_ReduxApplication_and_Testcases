import { GET_USERS, USERS_ERROR } from "../Action/Actiontype";

export const initialstate = {
    country: [],
    error: ""
}

const fetchreducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, country: action.payload, error: ""
            };
        case USERS_ERROR:
            return {
                ...state, error:action.payload
            }

        default:
            return state
    }
}


export default fetchreducer;
