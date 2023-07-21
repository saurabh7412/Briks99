import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
  auth: authReducer, // Remove the "reducer" keyword and use "auth" as the key
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
