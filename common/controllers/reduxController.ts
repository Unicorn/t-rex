import { createStore, applyMiddleware, compose, combineReducers, Store } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper'
import { alertReducer } from 'horseshoes'

import { rootSaga } from '@/controllers/sagaController'
import { authReducer } from '@/controllers/authController'
import { settingReducer } from '@/controllers/settingController'
import { initialState, RootState } from '@/models/app'
import { hydrateReducer } from './hydrateController'
// typeof window !== 'undefined' && window && (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__()

interface SagaStore extends Store {
  sagaTask?: Task
}

const rootReducer = combineReducers<RootState>({
  alerts: alertReducer,
  auth: authReducer,
  hydrate: hydrateReducer,
  settings: settingReducer,
} as any)

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/
export const makeStore: MakeStore<RootState> = (context: Context) => {
  const _saga = createSagaMiddleware();
  const _store = createStore(rootReducer, applyMiddleware(_saga));
  (_store as SagaStore).sagaTask = _saga.run(rootSaga);
  _saga.run(rootSaga);

  return _store
}

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});