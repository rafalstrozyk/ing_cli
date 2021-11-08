import { SET_IS_LOGIN, GET_USER_PROFILE } from '../types';

const initialState = {
  isLogin: false,
  userProfile: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
}
