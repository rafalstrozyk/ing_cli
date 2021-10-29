import axios from 'axios';
import { GET_COURSES, SET_IS_LOGIN } from '../types';

axios.defaults.baseURL = 'http://localhost:9000/';
axios.defaults.withCredentials = true;

export const getCourses = () => (dispatch) => {
  axios
    .get('/classroom/api/courses_list')
    .then((res) => {
      if (res.data.isLogin) {
        dispatch({ type: SET_IS_LOGIN, payload: res.data.isLogin });
        if (res.data.courses)
          dispatch({ type: GET_COURSES, payload: res.data.courses });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
