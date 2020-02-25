import { Resources, Alert, initResources } from 'horseshoes'

export interface RootState {
  alerts: Resources<Alert>
}

export const initialState: RootState = {
  alerts: initResources<Alert>(),
}
