import { all, takeLatest } from 'redux-saga/effects';

import { Types as DefaultTypes } from '../ducks/default';

import { addDefault } from './default';

export default function* rootSaga() {
  yield all([takeLatest(DefaultTypes.ADD_REQUEST, addDefault)]);
}
