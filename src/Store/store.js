import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "../Reducer/RootReducer";

const initialstate = {

}

 export const middleware = [thunk];

const store = createStore(RootReducer, initialstate, composeWithDevTools(applyMiddleware(...middleware),))

export default store;