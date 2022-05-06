import { GET_USERS, USERS_ERROR } from "./Actiontype";

import axios from "axios";


export const getusers =  (header) => async dispatch => {

  await axios.get(`https://restcountries.com/v3.1/region/${header}`).then(
        res => dispatch({
            type: GET_USERS,
            payload: res.data

        })).catch(e => dispatch({
        type: USERS_ERROR,
        payload: e.response.message,
    }))
};



 