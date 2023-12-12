import { all } from 'redux-saga/effects';
import landingSaga from './landingSaga';

export default function* rootSaga() {
  yield all([landingSaga()]);
}
