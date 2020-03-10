import { Resources, Alert, initResources } from 'horseshoes'
import { Auth } from './auth'
import { Settings } from './setting'

export interface RootState {
  alerts: Resources<Alert>
  auth: Auth
  settings: Settings
}

export const initialState: RootState = {
  alerts: initResources<Alert>(),
  auth: {
    isLoggedIn: false
  },
  settings: {
    drawers: {}
  }
}
