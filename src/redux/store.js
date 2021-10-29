import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import classroomReducer from './reducers/classroomReducer';

const middleware = [thunk];
const reducersTree = combineReducers({
  user: userReducer,
  classroom: classroomReducer,
});

const store = createStore(
  reducersTree,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
