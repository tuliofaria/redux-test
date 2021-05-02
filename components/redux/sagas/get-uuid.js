import { call, put } from '@redux-saga/core/effects'
import axios from 'axios'

export function* getUuid() {
  try {
    const data = yield call(axios.get, 'https://httpbin.org/uuid')
    yield put({ type: 'GET_UUID_SUCCESS', data: data.data.uuid })
  } catch (err) {
    yield put({ type: 'GET_UUID_ERROR' })
  }
}
