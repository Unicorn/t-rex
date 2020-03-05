import { Resources, Alert, initResources } from 'horseshoes'
import { Settings } from './setting'

export interface RootState {
  alerts: Resources<Alert>
  settings: Settings
}

export const initialState: RootState = {
  alerts: initResources<Alert>(),
  settings: {
    drawers: {}
  }
}
