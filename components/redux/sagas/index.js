import { takeLatest } from 'redux-saga/effects'
import { getUuid } from './get-uuid'

function* mySagaIncrement() {
  console.log('mySagaIncrement')
}

function* init() {
  console.log('mySaga')
  yield takeLatest('increment', mySagaIncrement)
  yield takeLatest('GET_UUID', getUuid)
}

export default init
