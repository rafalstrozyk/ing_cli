import axios from 'axios';
import { SET_IS_LOGIN, GET_USER_PROFILE } from '../types';

axios.defaults.baseURL = 'http://localhost:9000/';
axios.defaults.withCredentials = true;

export const setIsLogin = (isLogin) => (dispatch) => {
  dispatch({ type: SET_IS_LOGIN, payload: isLogin });
};

export const setUserProfile = (userData) => (dispatch) => {
  const userProfile = {
    id: userData.id,
    name: {
      givenName: userData.name.givenName,
      familyName: userData.name.familyName,
      fullName: userData.name.fullName,
    },
    emailAddress: userData.emailAddress,
  };
  dispatch({ type: GET_USER_PROFILE, payload: userProfile });
};
