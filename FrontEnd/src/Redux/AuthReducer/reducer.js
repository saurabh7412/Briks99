// reducer.js
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "./actionType";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: null, // For login success
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      localStorage.setItem("token", payload)
      return { ...state, isLoading: false, isAuth: true, token: payload };

    }
    case LOGIN_ERROR:
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGOUT: // Handle the LOGOUT action
      return {
        ...state,
        isAuth: false,
        token: null,
      };
      
    default: {
      return state;
    }
  }
};