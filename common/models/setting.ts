import { APP_NAME } from './app'

export const SETTING = {
  DRAWER: {
    TOGGLE: `${APP_NAME}/settings/TOGGLE_DRAWER`
  }
}

export interface Drawer {
  [key: string]: {
    collapse: boolean
  }
}

interface Drawers {
  drawers?: Drawer
}

export type Setting = Drawer

export interface Settings extends Drawers { }

export interface SettingsAction {
  type: string
  payload?: Setting
}