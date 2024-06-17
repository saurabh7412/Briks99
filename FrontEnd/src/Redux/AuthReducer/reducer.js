import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
  LOGOUT_ERROR,
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
      return { ...state, isLoading: false, isAuth: true, token: payload };
    }
    case LOGIN_ERROR:
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    case LOGOUT_ERROR: {
      return { ...state, isError: true };
    }
    default: {
      return state;
    }
  }
};
