import { combineReducers } from 'redux-immutable';
import routerReducer from '../reducers/Router';
import countReducer from '../reducers/Count'

export const createActions = ({ state, action }, actions) => {
  const cases = actions[action.type];
  return cases ? cases() : state;
};

const rootReducer = combineReducers({
  routing: routerReducer,
  count: countReducer,
});

export default rootReducer;
