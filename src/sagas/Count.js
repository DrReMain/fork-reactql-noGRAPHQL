import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects';
import { increment } from 'src/reducers/Count/actions';

export function* incrementAsync({ type, payload }) {
  try {
    yield call(delay, 1000);
    yield put(increment(payload));
  } catch (e) {
    console.log(e)
  }
}
