// first saga
import { call, put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import { putWait, withCallback } from 'redux-saga-callback';
import axios from 'axios';
import * as actions from '../actions';
import { types } from '../actions';
import { Constants } from '../../utils';
import { apiEndPoints, apiManager } from '../../apiServices';

function* saga_landing_api_products_category(action) {
  try {
    yield put();
  } catch (error) {
    const { response: { status, data } = {}, config } = error || {};
    yield put();
  } finally {
  }
}

function* landingSaga() {
  yield all([yield takeLatest()]);
}

export default landingSaga;
