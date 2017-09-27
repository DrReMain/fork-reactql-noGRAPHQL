import { takeEvery, all } from 'redux-saga/effects';
import { INCREMENT_ASYNC } from 'src/reducers/Count/types'
import { incrementAsync } from 'src/sagas/Count'

/* eslint-disable redux-saga/no-unhandled-errors */
export default function* rootSaga() {
  yield all([
    takeEvery(INCREMENT_ASYNC, incrementAsync)
  ]);
}
