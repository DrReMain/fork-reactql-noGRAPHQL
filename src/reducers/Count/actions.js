import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC } from './types';

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload
  };
};

export const incrementIfOdd = (payload) => {
  return {
    type: INCREMENT_IF_ODD,
    payload,
  }
};

