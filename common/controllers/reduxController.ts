import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { alertReducer } from 'horseshoes'

import { rootSaga } from '@/controllers/sagaController'
import { settingReducer } from '@/controllers/settingController'
import { initialState, RootState } from '@/models/app'

// typeof window !== 'undefined' && window && (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers<RootState>({
  alerts: alertReducer,
  settings: settingReducer,
} as any)

const composeEnhancers =
  typeof window === 'object' &&
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose


/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
export const nextStore = (init: RootState, opts: any) => {
  const _state = { ...initialState, ...init }
  const _saga = createSagaMiddleware()
  const _enhancer = composeEnhancers(applyMiddleware(_saga))
  const _store = createStore(rootReducer, _state, _enhancer)
  _saga.run(rootSaga)

  return _store
}