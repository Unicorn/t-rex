import { takeLatest, ForkEffect, PutEffect, AllEffect } from 'redux-saga/effects'

function* watchAppInit(): Iterable<AllEffect<PutEffect>> {
  console.log("App Init in appSaga")
}

export default function* appSaga(): Iterable<ForkEffect> {
  yield takeLatest('@@INIT', watchAppInit)
}
