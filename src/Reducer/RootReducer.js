import { combineReducers } from "redux";

import ApiReducer from "./ApiReducer";

export default combineReducers({
    users: ApiReducer
})