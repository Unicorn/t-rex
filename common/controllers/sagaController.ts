import { all } from 'redux-saga/effects'

import appSaga from '@/sagas/appSaga'
import alertSaga from '@/sagas/alertSaga'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function* rootSaga(): any {
  yield all([appSaga(), alertSaga()])
}
