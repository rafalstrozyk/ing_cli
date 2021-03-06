import { GET_COURSES } from '../types';

const initialState = {
  courses: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
}
