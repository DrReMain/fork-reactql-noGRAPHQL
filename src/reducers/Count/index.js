import { fromJS } from 'immutable';
import { createActions } from '../../reducers';
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD } from './types'

const initialState = fromJS({
  value: 0
});

export default (state = initialState, action) => {
  return createActions({ state, action }, {

    [INCREMENT]: () => {
      console.log(action.payload);
      return state.merge({ value: state.get('value') + 1 })
    },

    [DECREMENT]: () => {
      console.log(action.payload);
      return state.merge({ value: state.get('value') - 1 })
    },

    [INCREMENT_IF_ODD]: () => {
      console.log(action.payload);
      const current = state.get('value');
      if (current % 2 !== 0) return state.merge({ value: current + 1 });
      return state
    }
  });
};
