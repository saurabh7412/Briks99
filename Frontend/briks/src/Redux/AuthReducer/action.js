// actions.js
import axios from "axios";
import {
    
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(
      "https://enormous-library-3081-backend.onrender.com/user/login",
      userData
    )
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const register = (userData) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .post(
      "https://enormous-library-3081-backend.onrender.com/user/register",
      userData
    )
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_ERROR });
    });
};
